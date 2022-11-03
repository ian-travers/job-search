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
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
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
import { useStore } from "vuex";
import { computed } from "vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";

import { key } from "@/store";

import { LOGIN_USER } from "@/store/costants";

const menuItems = [
  { text: "Teams", url: "/teams" },
  { text: "Locations", url: "/" },
  { text: "Life at Bobo", url: "/" },
  { text: "How we hire", url: "/" },
  { text: "Students", url: "/" },
  { text: "Jobs", url: "/jobs/results" },
];

const store = useStore(key);

let isLoggedIn = store.state.isLoggedIn;
const headerHeightClass = computed(() => {
  return {
    "h-16": !isLoggedIn,
    "h-32": isLoggedIn,
  };
});

const loginUser = () => {
  store.commit(LOGIN_USER);
  isLoggedIn = store.state.isLoggedIn;
};
</script>
