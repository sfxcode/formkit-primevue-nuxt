<script setup lang='ts'>
const { addElement } = useFormKitSchema()
const { addListGroupFunctions } = useFormKitRepeater()
const { t } = useI18n()

const options = [
  { label: 'Every page load', value: 'refresh' },
  { label: 'Ever hour', value: 'hourly' },
  { label: 'Every day', value: 'daily' },
]

function createDefaultValue(): object {
  return { email: 'name@mydomain.com' }
}

const data = ref({ email: 'tom@mydomain.com', additionalMails: [{ email: 'peter@mydomain.com' }, { email: 'paul@mydomain.com' }], myCalendar: new Date(), date: new Date() })

const schema = reactive(
  [
    addElement('h3', ['Validation with FormKit - Inputs from PrimeVue']),
    {
      $formkit: 'primeOutputDate',
      name: 'date',
      label: 'Formatted Date',
    },
    {
      $formkit: 'primeInputText',
      name: 'email',
      label: 'Email',
      help: 'This will be used for your account.',
      validation: 'required|email',
      outerClass: 'col-7',
    },
    {
      $formkit: 'primeRepeater',
      name: 'additionalMails',
      label: 'Additional Mails',
      listClass: '',
      listItemClass: 'flex gap-2',
      buttonGroupClass: 'col-4 mt-6 flex gap-1',
      newItem: createDefaultValue(),
      displayCloneButton: true,
      displayAddButton: true,
      displayDeleteButton: true,
      insertButtonLabel: 'Add Mail',
      insertButtonClass: 'mb-2',
      alwaysDisplayInsertButton: true,
      children: [
        {
          $formkit: 'primeInputText',
          label: 'Additional Mail',
          name: 'email',
          outerClass: 'col-4',
          validation: 'required|email',

        },
      ],
    },
    {
      $formkit: 'primeTextarea',
      name: 'myText',
      label: 'Text',
      rows: '5',
    },
    {
      $formkit: 'primeDatePicker',
      name: 'myCalendar',
      label: 'Date Picker',
      validation: '',
      showIcon: true,

    },
    {
      $formkit: 'primePassword',
      name: 'password',
      label: 'Password',
      help: 'Enter your new password.',
      validation: 'required|length:5,16',
      outerClass: 'col-6',
    },
    {
      $formkit: 'primePassword',
      name: 'password_confirm',
      label: 'Confirm password',
      toggleMask: true,
      feedback: false,
      help: 'Enter your new password again to confirm it.',
      validation: 'required|confirm',
      validationLabel: 'password confirmation',
      outerClass: 'col-6',
    },
    {
      $formkit: 'primeCheckbox',
      name: 'eu_citizen',
      id: 'eu',
      suffix: 'Are you a european citizen?',
    },
    {
      $formkit: 'primeSelect',
      if: '$eu_citizen', // 👀 Oooo, conditionals!
      name: 'cookie_notice',
      label: 'Cookie notice frequency',
      value: 'hourly',
      showClear: false,
      filter: false,
      optionLabel: 'label',
      optionValue: 'value',
      options,
      help: 'How often should we display a cookie notice?',
    },
    {
      $formkit: 'primeSlider',
      name: 'slider',
      label: 'Max messages',
      style: 'width: 200px;margin-top: 6px;margin-bottom: 4px',
      min: 5,
      step: 5,
      value: 10,
    },
    {
      $formkit: 'primeKnob',
      name: 'knob',
      label: 'Use Knob',
      value: 50,
    },
  ],
)

async function submitHandler() {
  // Lets pretend this is an ajax request:
  await new Promise(resolve => setTimeout(resolve, 1000))
}
</script>

<template>
  <div>
    <h2>{{ t('app_description') }}</h2>
    <div v-if="data">
      <FormKitDataEdit
        id="FormKitDataEdit1"
        v-model="data"
        :schema="schema"
        :show-reset="true"
        :debug-schema="false"
        :debug-data="true"
        :submit-label="t('save')"
        @data-saved="submitHandler"
        @on-reset="() => { console.log('reset triggered') }"
      />
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
