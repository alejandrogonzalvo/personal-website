<template id="header">
  <header>
    <a href="https://github.com/alejandrogonzalvo">
      <img src="@/assets/github.svg" alt="github"/>
    </a>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
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

img {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
