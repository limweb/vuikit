<template>
  <div class="uk-child-width-1-4@m" uk-grid>
    <div class="uk-width-1-2@m">
      <h2>Styles</h2>
      <p>
        <a class="uk-button uk-button-default" href="#">Link</a>
        <vk-button>Button</vk-button>
        <vk-button active>Active</vk-button>
        <vk-button disabled>Disabled</vk-button>
      </p>
      <p>
        <a class="uk-button uk-button-primary" href="#">Link</a>
        <vk-button class="uk-button-primary">Button</vk-button>
        <vk-button class="uk-button-primary" active>Active</vk-button>
        <vk-button class="uk-button-primary" disabled>Disabled</vk-button>
      </p>
      <p>
        <a class="uk-button uk-button-secondary" href="#">Link</a>
        <vk-button class="uk-button-secondary">Button</vk-button>
        <vk-button class="uk-button-secondary" active>Active</vk-button>
        <vk-button class="uk-button-secondary" disabled>Disabled</vk-button>
      </p>
      <p>
        <a class="uk-button uk-button-danger" href="#">Link</a>
        <vk-button class="uk-button-danger">Button</vk-button>
        <vk-button class="uk-button-danger" active>Active</vk-button>
        <vk-button class="uk-button-danger" disabled>Disabled</vk-button>
      </p>
    </div>
    <div>
      <h2>Text</h2>
      <p>
        <a class="uk-button uk-button-text" href="#">Link</a>
        <vk-button class="uk-button-text">Button</vk-button>
        <vk-button class="uk-button-text" disabled>Disabled</vk-button>
      </p>
    </div>
    <div>
      <h2>Link</h2>
      <p>
        <vk-button>Button</vk-button>
        <vk-button class="uk-button-link">Button</vk-button>
      </p>
      <p>
        <vk-button disabled>Button</vk-button>
        <vk-button class="uk-button-link" disabled>Button</vk-button>
      </p>
      <p>
        <a href="#">Link</a>
        <vk-button class="uk-button-link uk-text-baseline">Button</vk-button>
      </p>
    </div>
  </div>
</template>
