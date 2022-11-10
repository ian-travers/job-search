<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed w-full top-0 left-0 h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
        >
          Bobo Careers
        </router-link>

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none space-x-9">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="h-full flex items-center py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <div v-if="isLoggedIn" class="flex items-center space-x-2">
            <profile-image v-if="isLoggedIn" data-test="profile-image" />
            <p>{{ userStore.firstName }}</p>
            <action-button text="Logout" @click="logoutUser" />
          </div>

          <action-button
            v-else
            text="Sign in"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>
      <subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";

import { useUserStore } from "@/store/UserStore";

const menuItems = [
  { text: "Teams", url: "/teams" },
  { text: "Locations", url: "/" },
  { text: "Life at Bobo", url: "/" },
  { text: "How we hire", url: "/" },
  { text: "Students", url: "/" },
  { text: "Jobs", url: "/jobs/results" },
];

const userStore = useUserStore();

const isLoggedIn = computed({
  get() {
    return userStore.isLoggedIn;
  },
  set() {
    userStore.LOGIN_USER();
  },
});

const headerHeightClass = computed(() => {
  return {
    "h-16": !isLoggedIn.value,
    "h-32": isLoggedIn.value,
  };
});

const loginUser = () => {
  userStore.LOGIN_USER();
};

const logoutUser = () => {
  userStore.LOGOUT_USER();
};
</script>
