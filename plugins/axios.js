
export default ({ $axios }) => {
  $axios.setBaseURL(process.env.NUXT_ENV_API_BASE_URL)
}
