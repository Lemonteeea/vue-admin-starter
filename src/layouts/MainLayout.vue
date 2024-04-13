<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'
import Icon from '@/components/Icon.vue'
import { routes } from '@/router'

const collapsed = ref(false)
const menuOptions: MenuOption[] = makeMenuOptions(routes[0].children as RouteRecordRaw[])
console.log(menuOptions)

function makeMenuOptions(routes: RouteRecordRaw[]): MenuOption[] {
  return routes.filter(route => route.path).map((route) => {
    const meta = route.meta
    return {
      key: route.path,
      title: meta?.title || '',
      icon: meta?.icon ? () => h(Icon, { icon: meta.icon as string }) : undefined,
      children: route.children ? makeMenuOptions(route.children) : undefined,
    }
  })
}
</script>

<template>
  <NLayout position="absolute">
    <NLayoutHeader class="h-16 flex items-center px-10 text-lg gap-2 text-primary" bordered>
      <img src="@/assets/logo.svg" alt="logo" class="h-6 ">
      Vue Admin
    </NLayoutHeader>
    <NLayout position="absolute" style="top: 4rem" has-sider>
      <NLayoutSider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <NMenu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </NLayoutSider>
      <NLayoutContent>
        <RouterView />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>
