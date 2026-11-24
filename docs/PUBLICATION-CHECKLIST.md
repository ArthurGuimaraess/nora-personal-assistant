# Public repository publication checklist

Use this checklist before adding or changing files in the public NORA repository.

## Scope and ownership

- [ ] Confirm every new file is intended for the public demonstration, its tests, or public-facing documentation.
- [ ] Do not include source code, assets or configuration copied from the separate private NORA application.
- [ ] Do not reveal private implementation details in documentation, screenshots, examples or commit messages.
- [ ] Remember that the repository license applies only to materials actually included here; it does not license the private application or the NORA brand.

## Secrets and personal information

- [ ] Keep environment files, API keys, tokens, certificates and private configuration out of the repository.
- [ ] Do not upload real databases, backups, user exports, photos or logs containing personal information.
- [ ] Use fictitious accounts and sample content in all demos and tests.
- [ ] Review screenshots and examples for names, email addresses, account details, health information and other personal data.

## Safety and quality

- [ ] Keep the demo local-only unless authentication, authorization, rate limiting, HTTPS and deployment hardening receive a separate security review.
- [ ] Run `python -m pytest -q tests` before submitting changes.
- [ ] Confirm dependencies and media assets have appropriate licenses.
- [ ] Clearly distinguish implemented demo functionality from product direction, prototypes and future ideas.
- [ ] Do not present the project as clinically validated or as a replacement for professional or emergency support.
