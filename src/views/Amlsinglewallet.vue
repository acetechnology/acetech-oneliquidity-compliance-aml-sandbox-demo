<template>
  <div>
    <BaseIcon style="pointer: cursor" @click="$router.go(-1)" name="skip-back">
      <address style="margin-right: 5px">GO BACK</address>
    </BaseIcon>
    <h1>Create an AML Request</h1>
    <form @submit.prevent="amlReqSingleTX">
      <h3>AML/CFT for single transaction</h3>
      <BaseInput
        label="Out Address"
        v-model="aml.address"
        type="text"
        placeholder="Out Address"
        class="field"
        :class="{ error: v$.aml.address.$error }"
        @blur="v$.aml.address.$touch()"
      />

      <template v-if="v$.aml.address.$error">
        <p v-if="!v$.aml.address.required" class="errorMessage">
          Address is required.
        </p>
      </template>

      <BaseInput
        label="Network"
        v-model="aml.network"
        type="text"
        placeholder="Network"
        class="field"
        :class="{ error: v$.aml.network.$error }"
        @blur="v$.aml.network.$touch()"
      />

      <template v-if="v$.aml.network.$error">
        <p v-if="!v$.aml.network.required" class="errorMessage">
          Network is required.
        </p>
      </template>

      <BaseInput
        label="Currency"
        v-model="aml.currency"
        type="text"
        placeholder="Currency"
        class="field"
        :class="{ error: v$.aml.currency.$error }"
        @blur="v$.aml.currency.$touch()"
      />

      <template v-if="v$.aml.currency.$error">
        <p v-if="!v$.aml.currency.required" class="errorMessage">
          Currency is required.
        </p>
      </template>

      <BaseButton
        type="submit"
        buttonClass="-fill-gradient"
        :disabled="v$.$anyError"
        >Submit</BaseButton
      >
      <p v-if="v$.$anyError" class="errorMessage">
        Please fill out the required field(s).
      </p>
    </form>
  </div>
  <br />
  <div v-if="req">
    {{ req }}
  </div>
</template>

<script>
import NProgress from "nprogress";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      req: null,
      types: this.$store.state.types,
      aml: {
        address: "3QR5NgfRByJAVQxcf9k7ELn4eAZV1zjoQo",
        network: "bitcoin",
        currency: "BTC",
      },
    };
  },
  validations: {
    aml: {
      address: { required },
      network: { required },
      currency: { required },
    },
  },
  methods: {
    amlReqSingleTX() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        NProgress.start();
        this.$store
          .dispatch("aml/amlReqWalletTX", this.aml)
          .then((res) => {
            //you can do it from the store or here
            this.req = res.data.data;
          })
          .catch(() => {
            NProgress.done();
          });
      } else {
        const notification = {
          type: "warning",
          message: `${this.v$.$errors[0].$property} ${this.v$.$errors[0].$message}`,
        };
        this.$store.dispatch("notification/add", notification, { root: true });
      }
    },
  },
};
</script>
