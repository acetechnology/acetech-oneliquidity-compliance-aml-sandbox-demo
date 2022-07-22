<template>
  <div>
    <h1>AML/CFT</h1>
    <BaseButton
      style="margin: 5px"
      type="submit"
      buttonClass="btn -fill-gradient"
      @click="$router.push({ name: 'aml-single' })"
      >Transaction hash AML/CFT analysis</BaseButton
    >

    <BaseButton
      style="margin: 5px"
      type="submit"
      buttonClass="btn -fill-gradient"
      @click="$router.push({ name: 'aml-wallet' })"
      >Wallet address AML/CFT analysis</BaseButton
    >

    <BaseButton
      style="margin: 5px"
      type="submit"
      buttonClass="btn -fill-gradient"
      @click="$router.push({ name: 'aml-wallet-batch' })"
      >Batch wallet addresses for AML/CFT analysis</BaseButton
    >
  </div>
</template>
