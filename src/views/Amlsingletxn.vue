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
        v-model="aml.outAddress"
        type="text"
        placeholder="Out Address"
        class="field"
        :class="{ error: v$.aml.outAddress.$error }"
        @blur="v$.aml.outAddress.$touch()"
      />

      <template v-if="v$.aml.outAddress.$error">
        <p v-if="!v$.aml.outAddress.required" class="errorMessage">
          To is required.
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
          Out Adddress is required.
        </p>
      </template>

      <BaseInput
        label="Hash"
        v-model="aml.hash"
        type="text"
        placeholder="Hash"
        class="field"
        :class="{ error: v$.aml.hash.$error }"
        @blur="v$.aml.hash.$touch()"
      />

      <template v-if="v$.aml.hash.$error">
        <p v-if="!v$.aml.hash.required" class="errorMessage">
          Hash is required.
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

      <BaseSelect
        label="Type"
        :options="types"
        placeholder="Type"
        v-model="aml.type"
        class="field"
        :class="{ error: v$.aml.type.$error }"
        @blur="v$.aml.type.$touch()"
      />

      <template v-if="v$.aml.type.$error">
        <p v-if="!v$.aml.type.required" class="errorMessage">
          Type is required.
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
        outAddress: "3QR5NgfRByJAVQxcf9k7ELn4eAZV1zjoQo",
        network: "bitcoin",
        hash: "fa2556d60a8f1dfef9dbcc22b49f7333f14e21c13a28b79227d209faf9060614",
        currency: "BTC",
        type: "",
      },
    };
  },
  validations: {
    aml: {
      outAddress: { required },
      network: { required },
      hash: { required },
      currency: { required },
      type: { required },
    },
  },
  methods: {
    amlReqSingleTX() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        NProgress.start();
        this.$store
          .dispatch("aml/amlReqSingleTX", this.aml)
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
