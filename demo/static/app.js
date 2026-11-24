/* NORA demo: local-only interface, sample data, no third-party APIs. */
'use strict';

const el = id => document.getElementById(id);
const navButtons = document.querySelectorAll('[data-view]');
const panels = document.querySelectorAll('[data-panel]');
let timerSeconds = 25 * 60;
let timerId = null;

function formatDate(iso) {
  const parts = iso.split('-').map(Number);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit', month: 'short', year: 'numeric'
  }).format(new Date(parts[0], parts[1] - 1, parts[2]));
}

function localToday() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(new Date());
  const values = {};
  parts.forEach(part => { values[part.type] = part.value; });
  return values.year + '-' + values.month + '-' + values.day;
}

function toast(message) {
  const element = el('toast');
  element.textContent = message;
  element.classList.add('show');
  window.clearTimeout(toast.timeoutId);
  toast.timeoutId = window.setTimeout(() => element.classList.remove('show'), 3000);
}

async function api(path, options) {
  const settings = options || {};
  const response = await fetch(path, Object.assign({
    headers: { 'Content-Type': 'application/json' }
  }, settings));
  if (!response.ok) {
    let message = 'Não foi possível concluir a operação';
    try {
      const payload = await response.json();
      if (typeof payload.detail === 'string') message = payload.detail;
    } catch (_error) { /* Keep the friendly fallback message. */ }
    throw new Error(message);
  }
  return response.status === 204 ? null : response.json();
}

function closeMenu() {
  el('sidebar').classList.remove('open');
  el('overlay').hidden = true;
  el('menu-toggle').setAttribute('aria-expanded', 'false');
}

function switchView(view) {
  navButtons.forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  panels.forEach(panel => { panel.hidden = panel.dataset.panel !== view; });
  const names = {
    today: ['Meu dia', 'Pequenos passos, no seu ritmo. Ajuste a lista conforme sua energia e o que faz sentido hoje.'],
    agenda: ['Agenda', 'Visualize e conclua suas tarefas organizadas por data.'],
    focus: ['Modo foco', 'Experimente um período de atenção ou pause quando precisar. Não é preciso terminar tudo.'],
    about: ['Sobre esta demonstração', 'Conheça o propósito e os limites desta versão reduzida da NORA.']
  };
  el('page-title').textContent = names[view][0];
  el('page-subtitle').textContent = names[view][1];
  closeMenu();
}

function renderList(target, records) {
  const root = el(target);
  root.replaceChildren();
  if (!records.length) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = 'Nenhuma tarefa nesta lista. Adicione um pequeno passo quando fizer sentido.';
    root.append(empty);
    return;
  }

  records.forEach(task => {
    const row = document.createElement('div');
    row.className = 'task' + (task.done ? ' completed' : '');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.setAttribute('aria-label', 'Concluir ' + task.title);
    checkbox.addEventListener('change', async () => {
      try {
        await api('/api/tasks/' + task.id, {
          method: 'PATCH',
          body: JSON.stringify({ done: checkbox.checked })
        });
        await refresh();
      } catch (error) {
        checkbox.checked = !checkbox.checked;
        toast(error.message);
      }
    });

    const content = document.createElement('div');
    content.className = 'task-content';
    const name = document.createElement('strong');
    name.textContent = task.title;
    const meta = document.createElement('small');
    meta.textContent = task.category + ' • ' + formatDate(task.due_date);
    content.append(name, meta);

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'remove';
    remove.textContent = '×';
    remove.setAttribute('aria-label', 'Excluir ' + task.title);
    remove.addEventListener('click', async () => {
      try {
        await api('/api/tasks/' + task.id, { method: 'DELETE' });
        await refresh();
        toast('Tarefa removida.');
      } catch (error) { toast(error.message); }
    });

    row.append(checkbox, content, remove);
    root.append(row);
  });
}

async function refresh() {
  try {
    const results = await Promise.all([api('/api/tasks'), api('/api/overview')]);
    const all = results[0];
    const summary = results[1];
    el('total').textContent = summary.total;
    el('done').textContent = summary.done;
    el('progress').textContent = (summary.total
      ? Math.round(summary.done * 100 / summary.total) : 0) + '%';
    renderList('today-tasks', all.filter(task => task.due_date === summary.today));
    renderList('all-tasks', all);
  } catch (error) {
    toast('Erro ao carregar: ' + error.message);
  }
}

function updateTimer() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  el('timer').textContent =
    String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

function pauseTimer() {
  window.clearInterval(timerId);
  timerId = null;
  el('timer-toggle').textContent = 'Continuar';
}

function initialize() {
  const today = localToday();
  el('due').value = today;
  el('today-label').textContent = formatDate(today);

  navButtons.forEach(button => {
    button.addEventListener('click', () => switchView(button.dataset.view));
  });

  el('menu-toggle').addEventListener('click', () => {
    const isOpen = el('sidebar').classList.toggle('open');
    el('overlay').hidden = !isOpen;
    el('menu-toggle').setAttribute('aria-expanded', String(isOpen));
  });

  el('overlay').addEventListener('click', closeMenu);
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  el('task-form').addEventListener('submit', async event => {
    event.preventDefault();
    const title = el('title').value.trim();
    if (!title) return;
    try {
      await api('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          category: el('category').value,
          due_date: el('due').value
        })
      });
      el('title').value = '';
      el('title').focus();
      await refresh();
      toast('Pequeno passo adicionado.');
    } catch (error) { toast(error.message); }
  });

  el('timer-toggle').addEventListener('click', () => {
    if (timerId) { pauseTimer(); return; }
    el('timer-toggle').textContent = 'Pausar';
    timerId = window.setInterval(() => {
      timerSeconds = Math.max(0, timerSeconds - 1);
      updateTimer();
      if (timerSeconds === 0) {
        pauseTimer();
        toast('Este ciclo terminou. Faça uma pausa se desejar.');
      }
    }, 1000);
  });

  el('timer-reset').addEventListener('click', () => {
    if (timerId) pauseTimer();
    timerSeconds = 25 * 60;
    updateTimer();
    el('timer-toggle').textContent = 'Iniciar foco';
  });

  refresh();
}

document.addEventListener('DOMContentLoaded', initialize);
