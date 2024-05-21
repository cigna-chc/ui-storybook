export default function (plop) {
  // controller generator
  plop.setGenerator('Custom Component', {
    description: 'Custom Component Generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name to generate the Custom Component'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/main/webpack/components/{{dashCase name}}/docs/{{dashCase name}}.stories.js',
        templateFile: 'plop-templates/component/doc/component.stories.js'
      },
      {
        type: 'add',
        path: 'src/main/webpack/components/{{dashCase name}}/htl/{{dashCase name}}.htl',
        templateFile: 'plop-templates/component/htl/component.htl'
      },
      {
        type: 'add',
        path: 'src/main/webpack/components/{{dashCase name}}/{{dashCase name}}.hbs',
        templateFile: 'plop-templates/component/component.hbs'
      },
      {
        type: 'add',
        path: 'src/main/webpack/components/{{dashCase name}}/{{dashCase name}}.js',
        templateFile: 'plop-templates/component/component.js'
      },
      {
        type: 'add',
        path: 'src/main/webpack/components/{{dashCase name}}/{{dashCase name}}.scss',
        templateFile: 'plop-templates/component/component.scss'
      }
    ]
  });

  plop.setGenerator('Core Component', {
    description: 'Core Component Generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name to generate the Core Component'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/main/webpack/core-components/{{dashCase name}}/docs/{{dashCase name}}.stories.js',
        templateFile: 'plop-templates/core-components/doc/component.stories.js'
      },
      {
        type: 'add',
        path: 'src/main/webpack/core-components/{{dashCase name}}/htl/{{dashCase name}}.htl',
        templateFile: 'plop-templates/core-components/htl/component.htl'
      },
      {
        type: 'add',
        path: 'src/main/webpack/core-components/{{dashCase name}}/{{dashCase name}}.hbs',
        templateFile: 'plop-templates/core-components/component.hbs'
      },
      {
        type: 'add',
        path: 'src/main/webpack/core-components/{{dashCase name}}/{{dashCase name}}.js',
        templateFile: 'plop-templates/core-components/component.js'
      },
      {
        type: 'add',
        path: 'src/main/webpack/core-components/{{dashCase name}}/{{dashCase name}}.scss',
        templateFile: 'plop-templates/core-components/component.scss'
      }
    ]
  });

}
