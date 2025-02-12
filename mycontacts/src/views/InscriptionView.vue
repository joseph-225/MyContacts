<template>
  <div class="h-full bg-gray-400 dark:bg-gray-900">
    <!-- Container -->
    <div class="mx-auto">
      <div class="flex justify-center px-6 py-12">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style="
              background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
            "
          ></div>
          <!-- Col -->
          <div
            class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none"
          >
            <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">
              Inscrivez-vous !!!
            </h3>
            <form
              @submit.prevent="submitForm"
              class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
            >
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="firstName"
                    >Nom</label
                  >
                  <input
                    v-model="firstName"
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="Nom"
                    type="text"
                    placeholder="Nom"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="Prenom"
                    >Prenom</label
                  >
                  <input
                    v-model="lastName"
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Prenom"
                  />
                </div>
              </div>
              <div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="Genre"
                    >Genre</label
                  >
                  <input
                    v-model="gender"
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="Genre"
                    type="text"
                    placeholder="Genre"
                  />
                  <p class="text-xs italic text-red-500">
                    S'il vous plait entrer votre genre.
                  </p>
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="birthDate"
                    >Date de naissance</label
                  >
                  <input
                    v-model="birthDate"
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="birthDate"
                    type="date"
                    placeholder="Date de naissance"
                  />
                  <p class="text-xs italic text-red-500">
                    S'il vous plait entrer votre date de naissance.
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  for="email"
                  >Email</label
                >
                <input
                  v-model="email"
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="password"
                    >Mots passe</label
                  >
                  <input
                    v-model="password"
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p class="text-xs italic text-red-500">
                    S'il vous plait entrer votre mot de passe.
                  </p>
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="confirmPassword"
                    >Confirmez mots de passe</label
                  >
                  <input
                    v-model="confirmPassword"
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Account
                </button>
              </div>
              <hr class="mb-6 border-t" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: "",
      birthDate: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitForm() {
      // Logique de soumission du formulaire
      console.log("Nom:", this.firstName);
      console.log("Prénom:", this.lastName);
      console.log("Genre:", this.gender);
      console.log("Date de naissance:", this.birthDate);
      console.log("Email:", this.email);
      console.log("Mot de passe:", this.password);
      console.log("Confirmez mot de passe:", this.confirmPassword);

      // Ajoute ici la logique d'inscription
    },
  },
};
</script>

<style scoped>
/* Ajoute ton style personnalisé ici */
</style>
