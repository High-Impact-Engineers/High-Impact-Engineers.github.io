# High Impact Engineers

## about

This is the repo for the [High Impact Engineers website](https://high-impact-engineers.github.io/).

## why is the website here now?

In 2024 High Impact Engineers lost continuous funding. As a result it is now [completely volunteer-run](https://forum.effectivealtruism.org/posts/kqQgSj3eyBM5D8B2P/high-impact-engineers-is-transitioning-to-a-volunteer-led). Keeping the website here

- keeps costs down
- makes handovers easy as volunteers will inevitably come and go depending on what capacity they have at any point in time

## contributing

### developing

#### I really want to help maintain and build the website (but this maybe all seems a bit scary)

If you're not sure what you're doing (or just want an intro to the codebase), you can reach out to an active contributor for an onboarding call. We're happy to help you get started with contributing (if we have time)! You don't need previous coding experience, although it obviously helps.

If this README makes sense to you and you feel confident in what you're doing, you can just go ahead and make pull requests.

#### making pull requests

If you want to do a one-off change, you can just fork this repo, make the change, then [open a pull request](https://github.com/High-Impact-Engineers/High-Impact-Engineers.github.io/pulls).

If you want to become a regular contributor, you can ask to be added to the [website team](https://github.com/orgs/High-Impact-Engineers/teams/website-contributors). I recommend that you first make a few pull requests (can be as simple as fixing typos or broken links) from forks. That makes it more likely you'll be trusted with access to the main repo.

### report bugs

Found a bug? [Open an issue](https://github.com/High-Impact-Engineers/High-Impact-Engineers.github.io/issues).

See above for what to do if you want to fix the bug yourself.

### make suggestions

Have a suggestion? [Open an issue](https://github.com/High-Impact-Engineers/High-Impact-Engineers.github.io/issues).

See above for what to do if you want to implement the feature yourself.

### contribute to BOLOHIP

If you want to add a new project to our big old list of high impact projects, you can make a pull request! Here is what you need to do:

- follow the setup instructions below to get the website running locally
- create a new markdown file in the `pages/bolohip` folder
- use the same format as the other files in the folder (you can use the [template](./000-bolohip-entry-template.md) as a starting point) and update the properties at the top
- add a 2:1 aspect ratio `.png` banner image to the `media/bolohip/projects` folder and give it the same name as the markdown file
- verify that the project shows up properly on the BOLOHIP page
- commit your changes
- make a pull request

You can also make pull requests to existing pages to improve them.

If that seems like too much work (or if you don't feel confident with using git), you can also just [create an Issue](https://github.com/High-Impact-Engineers/High-Impact-Engineers.github.io/issues) and use the label `new bolohip entry`. It just might take a while for someone to get to it.

Here are the status tags we use at the moment:

- `does not exist`: no one has made a prototype yet
- `prototype`: someone made a prototype, but that's it!
- `exists - potential for improvement`: the project exists, but there might be room for improvement

## local dev setup

Install Ruby (and the development kit).

Once, run:

``` bash
gem i bundler first
```

To install missing gems, run:

``` bash
bundle install
```

To build the website locally, run:

``` bash
bundle exec jekyll serve
```

The website should then be accessible at:

``` bash
http://localhost:4000/
```

It will be regenerated every time you save a new change in a markdown file.

## branding

The core colours currently are: #52796f, #b7bfb2, #e7eeec.

The current logo is:
![logo](media/logo.svg)

## licensing

- The **code** in this repository is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).
  - that means that you can use the skeleton code for the website as a template or inspiration for another website
  - this excludes all the text and images, though
- The **content** (e.g. text in Markdown files, media) is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
  - you can distribute, remix, adapt, and build upon the content (e.g. for giving talks at EA conferences, writing blogs or articles)
  - but you must give credit (just say something like "taken from the website of High Impact Engineers on date dd.mm.yyyy" and make sure to credit individual authors, where available)
  - and adaptations must be shared under the same terms (so if you use content in a blog post, article or presentation, just put a CC BY-SA 4.0 there as well)
