<script setup lang="ts">
import type { DecodedVehicle } from '~/types'

const decodedVehicle = ref<DecodedVehicle>({
  vin: '',
  year: '',
  make: '',
  model: '',
})

const { minVehicleYear, vehicleMakes, vehicleModels, vehicleYears } =
  useVehicles()

const { submitted, submitHandler, formData } = useContactForm({
  decodedVehicle,
  vehicleMakes,
  vehicleModels,
})

const { isValidVin } = useVehiclesApi()
</script>

<script lang="ts">
export default { name: 'ContactForm' }
</script>

<template>
  <div
    class="max-w-5xl mx-auto px-6 py-10 rounded shadow-xl dark:bg-zinc-900 sm:(px-8) md:(px-10) lg:(px-12)"
  >
    <ClientOnly>
      <FormKit
        v-if="!submitted"
        id="form"
        v-model="formData"
        type="form"
        :config="{
          classes: {
            outer: 'w-full col-span-1',
            wrapper: 'min-w-full sm:mx-auto',
            input: 'font-kanit dark:(bg-zinc-900 text-stone-100)',
            label: 'tracking-wider',
            message: 'text-lg dark:text-yellow-400',
            help: 'text-red-600 dark:text-yellow-400',
          },
        }"
        submit-label="Send"
        actions-class="grid sm:(place-items-center)"
        incomplete-message="Achtung! We can't provide efficient help without all fields being filled out correctly."
        @submit="submitHandler"
      >
        <div class="grid gap-6 md:gap-8 mb-8">
          <h2 class="text-3xl md:text-4xl font-kanit tracking-wide">
            Contact Us
          </h2>
          <p>
            Please fill in as much information as you are able to provide so we
            can better assist you
          </p>
          <hr class="border-t border-red-900/70" />

          <div
            class="w-full grid gap-y-1 sm:(grid-cols-2 gap-x-10 place-content-center mx-auto)"
          >
            <FormKit
              type="text"
              name="nameFirst"
              label="First Name"
              placeholder="Jane"
              validation="required"
              help="*required"
            />
            <FormKit
              type="text"
              name="nameLast"
              label="Last Name"
              placeholder="Doe"
              validation="required"
              help="*required"
            />
            <FormKit
              type="tel"
              name="phone"
              label="Phone Number"
              placeholder="xxx-xxx-xxxx"
              validation="required"
              :validation-messages="{
                required: 'Please provide a call back number.',
              }"
              help="*required"
            />
            <FormKit
              type="text"
              name="email"
              label="Email"
              placeholder="jane@example.com"
              validation="required|email"
              help="*required"
            />
          </div>
          <hr class="border-t border-red-900/70" />

          <h3
            class="sm:text-center text-lg sm:text-2xl font-semibold dark:text-stone-300"
          >
            Vehicle Information:
          </h3>
          <div
            class="w-full grid gap-y-1 sm:(grid-cols-2 gap-x-10 content-center)"
          >
            <FormKit
              type="text"
              name="vehicleVin"
              label="Vehicle Identification Number (VIN)"
              placeholder="Ex: WAURFAFR6AA002698"
              :help="
                formData.vehicleVin.length
                  ? `${formData.vehicleVin.length} / 17`
                  : ''
              "
              validation="length:17,17|isValidVin"
              :validation-rules="{ isValidVin }"
              validation-visibility="dirty"
              :validation-messages="{
                length: () => 'A valid VIN contains exactly 17 characters',
                isValidVin: () => 'That is not a valid VIN',
              }"
            />
            <FormKit
              type="select"
              name="vehicleYear"
              label="Year"
              placeholder="Select a Year"
              :classes="{
                input: 'dark:(text-stone-100)',
                option: 'dark:(bg-stone-100 text-black)',
              }"
              :validation="`min:${minVehicleYear}`"
              :validation-messages="{
                min: () =>
                  `Sorry, we only service ${minVehicleYear} or newer vehicles`,
              }"
              validation-visibility="dirty"
              :options="vehicleYears"
            >
            </FormKit>
            <template
              v-if="
                formData.vehicleYear &&
                parseInt(formData.vehicleYear) >= minVehicleYear
              "
            >
              <FormKit
                type="select"
                name="vehicleMake"
                label="Make"
                placeholder="Select a Make"
                :classes="{
                  input: 'dark:(text-stone-100)',
                  option: 'dark:(bg-stone-100 text-black)',
                }"
                validation="+matches:Audi,Volkswagen"
                :validation-messages="{
                  matches: () =>
                    'Sorry, we only service Audi and Volkswagen vehicles',
                }"
                validation-visibility="dirty"
                :options="vehicleMakes"
              />
            </template>
            <template
              v-if="
                formData.vehicleMake &&
                formData.vehicleYear &&
                parseInt(formData.vehicleYear) >= minVehicleYear
              "
            >
              <FormKit
                type="select"
                name="vehicleModel"
                label="Model"
                :classes="{
                  input: 'dark:(text-stone-100)',
                  option: 'dark:(bg-stone-100 text-black)',
                }"
                placeholder="Select a Model"
                :options="vehicleModels[formData.vehicleMake] || []"
              />
            </template>
          </div>
          <hr class="border-t border-red-900/70" />
          <div
            class="w-full grid sm:(grid-cols-1 place-content-center mx-auto)"
          >
            <FormKit
              type="text"
              name="subject"
              label="Subject"
              rows="10"
              placeholder="Subject"
              validation="required"
              :validation-messages="{
                required: () => 'Please provide a subject for your message.',
              }"
              help="*required"
            />
            <FormKit
              type="textarea"
              name="message"
              label="How can we help?"
              rows="10"
              placeholder="Let us know..."
              validation="required"
              :validation-messages="{
                required: () =>
                  'You\'ll have to provide a message before we can help.',
              }"
              help="*required"
            />
          </div>
        </div>
      </FormKit>
      <div
        v-if="submitted"
        class="grid gap-4 place-items-center px-8 py-12 text-center font-semibold text-green-800 dark:text-green-500 dark:bg-zinc-900"
      >
        <IconIconParkOutline:message-success class="text-4xl lg:text-5xl" />
        <h2 class="text-2xl lg:text-3xl">Submission successful!</h2>
        <p class="text-xl lg:text-2xl">
          Help is on the way, we'll reply to your message ASAP.
        </p>
      </div>
    </ClientOnly>
  </div>
</template>
