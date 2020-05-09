<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atualizar</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm";
import { api } from "@/services";

export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm
  },
  methods: {
    atualizarUsuario() {
      api
        .put(
          `/usuario/${this.$store.state.usuario.id}`,
          this.$store.state.usuario
        )
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style>
</style>