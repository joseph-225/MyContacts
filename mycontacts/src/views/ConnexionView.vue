<template>
  <div class="flex justify-center items-center h-screen p-10">
    <div class="grid md:grid-cols-2 grid-cols-1 border rounded-3xl">
      <div class="flex justify-center items-center p-5">
        <form @submit.prevent="handlesSubmit">
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
import axios from "axios";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handlesSubmit() {
      // Logique de soumission du formulaire
      console.log("Email:", this.email);
      console.log("Mot de passe:", this.password);

      axios
        .post("http://62.72.5.95:5013/api/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWUyMDUyMDA3YjkyNDU4NWVkYmNlNiIsImlhdCI6MTY5Mzk2MTQ0OSwiZXhwIjoxN2NTUQ5fQ.l3B2rMSs6DZ9b5T2cO5Kmg9cCmnrCQx83aSnluqI",
            response.data.token
          );
          this.$router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
/* Ajoute ton style personnalisé ici */
</style>
