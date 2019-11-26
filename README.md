# GitHub Actions NPM Publisher

![build status badge](https://github.com/urma/github-actions-publishing/workflows/Node%20CI/badge.svg)

This is a demo package used to confirm the possibility of enforcing
access to GitHub actions on open source projects, restricting the
publishing of packages to authorised contributors.

## Restrictions to Publishing New Releases

In order to prevent arbitrary project contributors from creating new releases of the package, a few
criteria must be met:

* The repository must be a part of an organisation rather than an individual user account;
* Contributors must be invited and granted **triage** role, rather than **write** role
(which seems very counter-intuitive); users with **triage** roles can create forks and
submit pull requests via those, but cannot commit directly to the repository
* Contributors must enable workflows from forked repositories to be executed, or any branch
protection criteria which requires successful automated testing will never execute and
merges will be blocked indefinitely
