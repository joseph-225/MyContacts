<template>
  <div class="flex justify-center items-center h-screen p-10">
    <div class="grid md:grid-cols-2 grid-cols-1 border rounded-3xl">
      <div class="flex justify-center items-center p-5">
        <form @submit.prevent="submitForm">
          <h1 class="text-center mb-10 font-bold text-4xl">Connexion</h1>
          <input
            v-model="email"
            type="email"
            class="bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
            placeholder="E-mail"
            required
          />
          <input
            v-model="password"
            type="password"
            class="bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-3"
            placeholder="Mot de passe"
            required
          />
          <button
            type="submit"
            class="bg-yellow-400 hover:bg-yellow-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
          >
            Connectez-vous
          </button>
        </form>
      </div>
      <div class="">
        <img
          src="https://img.freepik.com/premium-vector/vector-abstract-seamless-pattern-with-stars-blue-background_117177-1008.jpg"
          class="rounded-3xl"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Logique de soumission du formulaire
      console.log("Email:", this.email);
      console.log("Mot de passe:", this.password);

      // Ajoute ici la logique d'authentification
    },
  },
};
</script>

<style scoped>
/* Ajoute ton style personnalisé ici */
</style>
