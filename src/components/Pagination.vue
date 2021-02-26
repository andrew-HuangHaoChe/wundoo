<template>
    <div>
      <div class="pagenation d-flex">
        <div class="container custom-container-width d-flex justify-content-between px-0">
          <button class="btn page-prev"><i class="fas fa-chevron-left"></i></button>
          <div>
            <ul class="list-unstyled d-flex page-select d-flex justify-content-center">
              <li><a href="#" class="page-btn page-active">1</a></li>
              <li><a href="#" class="page-btn">2</a></li>
              <li><a href="#" class="page-btn">3</a></li>
              <li><a href="#" class="page-btn">4</a></li>
            </ul>
          </div>
          <button class="btn page-next"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.page-select {
  margin-bottom: 0;
  li {
    margin: 5px 15px;
    @media (max-width: 375px) {
      display: none;
    }
    @media (max-width: 320px) {
      display: none;
    }
  }
  .page-btn {
    border: 2px solid #A1A1A1;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    color: #A1A1A1;
  }
  .page-active {
    background-color:#DC131A;
    color: #ffffff;
    border-color:#DC131A;
  }
}
.page-prev {
  background: #D9D9D9;
  border-radius: 5px;
  color:#686868;
  font-weight: 900;
  padding: 5px 30px;
}
.page-next {
  background: #E1273A;
  border-radius: 5px;
  color:#ffffff;
  font-weight: 900;
  padding: 5px 30px;
}
</style>
