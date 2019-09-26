export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8ccf8843acb716638317ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-testing-studio',
                  apiId: '2cf26040-e12c-497e-bbf7-64b4c48679fc'
                },
                {
                  buildHookId: '5d8ccf88dfe5f22d8bdfce3e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-testing',
                  apiId: 'fed48bf8-526d-4e48-bd68-a3ce2d157c09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-gatsby-blog-testing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-testing.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
