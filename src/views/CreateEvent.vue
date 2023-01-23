<template>
    <div>
        <div class="mainInputClass">
            <span class="headline"><span>Create new event</span></span>
            <span class="logo"><span>StarEvents</span></span>
        <img
            src="src/Images/GreyBox.jpeg"
            alt="Rectangle13404068"
            class="greyBox"
        />
        <span class="addPictureText"><span>Add picture..</span></span>
            <input type="text" placeholder="Name*" />
            <input
            type="text" placeholder="Location*" />
            <input type="text" placeholder="Date*"  />

            <input type="text" placeholder="Description" />
            <a href="/viewprofile" class="button">
            <span class="buttonText"><span>Create event</span></span></a>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "createevent",
  created() {
    document.body.style.backgroundColor = "#FFFFFF";
  },
};
</script>



<style scoped>

.mainInputClass {
  margin-top: 70px;
  left: 25px;
  height: 559px;
  display: flex;
  padding: 0 0 84px 0;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  flex-direction: column;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  


}

.mainInputClass > input{
  color: rgba(151, 151, 151, 1);
  display: flex;
  flex-shrink: 0;
  border-radius: 20px;
  margin-bottom: 19px;
  font-family: Poppins;
  font-size: 16px;
  width: 65vw;
  padding: 18px 10px;
  border-color: transparent;
  background-color: rgba(249, 250, 251, 1);
    
}

.button {
  display: flex;
  flex-shrink: 0;
  border-radius: 24px;
  padding: 18px 10px;
  width: 65vw;
  border-color: transparent;
  justify-content: center;
  background-color: rgba(29, 176, 179, 1);
  cursor: pointer
}
.buttonText {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 16px;
  font-style: SemiBold;
  font-family: Poppins;
  font-weight: 600;
  line-height: 160.0000023841858%;
}

.headline {
  width: 325px;
  display: flex;
  align-items: center;
  border-color: transparent;
  flex-direction: column;
  margin-top: 8vw;
  color: rgba(10, 13, 20, 1);
  font-size: 24px;
  font-family: Poppins;
}

.greyBox {
  top: 300px;
  left: 47px;
  width: 277px;
  height: 149px;
  border-color: transparent;
  
}
.addPictureText {
  top: 245px;
  left: 78px;
  color: rgba(105, 184, 185, 1);
  width: 200px;
  font-size: 16px;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  margin-right: 0;
  margin-bottom: 2vw;
  text-decoration: underline;
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


@media(max-width: 479px) {
  .frame162740-homescreenandevents {
    height: 777px;
  }
}
</style>
