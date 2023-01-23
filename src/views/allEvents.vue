<template>
 <div class="eventContainer">
 <span class="logo"><span>StarEvents</span></span>
    <img src="src/Images/Skærmbillede 2022-12-04 kl. 12.34.33.png">
    <div class="divEventInfo">
      <div style="display: flex; flex-direction: column">
        <div class="eventName">Birthday</div>
        <div class="sideData">
          <div>2 April 2023</div>
          <div style="display: flex; flex-direction: row; align-items: center; gap: 10%">
            Gistle
          </div>
        </div>
      </div>
    </div>
  <event-list></event-list>  
  <event-list></event-list>  

  </div>
 </template>


<script>
export default {
  name: "allEvents",
  created() {
    document.body.style.backgroundColor = "#20B2AA";
  },
};
</script>



<style scoped>

  img {
    max-height: 40%;
    max-width: 15%;
    border-radius: 20px;
  }

  .eventContainer {
    display: flex;
    overflow-y: auto;
    flex-direction: row;
    background: #BEC0C7;
    min-height: 84px;
    min-width: 300px;
    padding: 10px;
    border-radius: 25px;
    gap: 10px;
    margin-top: 70px;
  }

  .eventContainer:hover {
  box-shadow: 0 0 30px rgba(29, 176, 179, 1);;
}

  .eventName {
    color: #CD853F;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .sideData {
    color: white;
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 400;
    gap: 8%;
  }

  .logo {
  position: absolute;
  top: 15px;
  right: 5vw;
  color: rgba(242, 181, 90, 1);
  width: 152px;
  font-size: 20px;
  font-style: SemiBold;
  font-family: Plus Jakarta Sans;
  font-weight: 600;
}
</style>