
/**
 * @description function to generate page template and configure pre-made paging settings.
 */
function Pages() {
  this.page = 1;
  this.page_records = 4;
  this.total_recors = 0;
  this.total_pages = 0;
}
module.exports = Pages;
