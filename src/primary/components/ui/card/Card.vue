<script setup lang="ts">
import { cn } from '@/secondary/lib/utils';

const props = defineProps({
    class: {
        type: String,
        default: ''
    }
});
</script>

<template>
    <div :class="cn(' bg-card text-card-foreground shadow-sm', props.class)">
        <slot />
    </div>
</template>
