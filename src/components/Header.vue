<template id="header">
  <header>
    <a href="https://github.com/alejandrogonzalvo" class="logo">
      <img src="@/assets/github.svg" alt="github"/>
    </a>

    <a href="https://github.com/alejandrogonzalvo" class="logo">
      <img src="@/assets/youtube.svg" alt="youtube"/>
    </a>
    <nav>
      <ul>
        <li><router-link to="/" class="router-link" >Home</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
header {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: .5rem 1rem;
  background-color: Azure;

}

header p {
  margin-left: 1rem;
}

nav {
  margin-left: auto;
}

nav ul {
 list-style-type: none;
}

nav ul li {
  list-style-type: none;
  display: inline-flex;
  margin-left: 1rem;
}

.router-link {
  text-decoration: none;
}

.logo {
  display: inline-block;
  vertical-align: baseline;
  margin: 0 8px 0 0;
}
</style>
