<template>
  <div class="uk-child-width-1-4@m" uk-grid>
    <div class="uk-width-1-2@m">
      <vk-button-checkbox
        :value="demo.value"
        @change="value => {
          demo.value = value
        }">
        <vk-button :value="1">Button 1</vk-button>
        <vk-button :value="2">Button 2</vk-button>
        <vk-button :value="3">Button 3</vk-button>
      </vk-button-checkbox>
    </div>
    <div class="uk-width-1-2@m">
      <vk-button-checkbox group
        :value="demo.value"
        @change="value => {
          demo.value = value
        }">
        <vk-button :value="1">Button 1</vk-button>
        <vk-button :value="2">Button 2</vk-button>
        <vk-button :value="3">Button 3</vk-button>
      </vk-button-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    demo: {
      value: [1]
    }
  })
}
</script>
