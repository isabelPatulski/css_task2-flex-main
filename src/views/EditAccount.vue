<template>
<span class="logo"><span>StarEvents</span></span>
  <div class="mainInputClass"> 
  <div class="nameProfile">
      <img src="src/Images/ProfilePic.png" alt="Rectangle11714045" class="profilePic"/>
    <span class="welcomeText">
      <span>Welcome to your profile!</span>
    </span>
    </div>

      <span class="johnSmithName"><span>John Smith</span></span>
    <input type="text" placeholder="John" />
    <input type="text" placeholder="Smith" />
    <input type="text" placeholder="JohnSmith@gmail.com" />
    <input type="text" placeholder="Password" 
      /> 
      <div class="buttons">  
        <a href="/viewprofile" class="doneButton">
            <span class="buttonTextDone"><span>Done</span></span></a>
        <a href="/" class="deleteButton"></a>
            <span class="buttonTextDelete"><span>Delete</span></span>
      </div>
  </div>
</template>

<script>
export default {
  name: "editaccount",
  created() {
    document.body.style.backgroundColor = "#FFA500";
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
  align-items: left;
  justify-content: left;
  border-color: transparent;
  flex-direction: column;
  width: 70vw;
  margin-left: 1vw;
  
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

.buttons{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}

.doneButton {
  display: flex;
  flex-shrink: 0;
  border-radius: 24px;
  padding: 18px 10px;
  width: 0vw;
  border-color: transparent;
  justify-content: center;
  background-color: transparent;
  cursor: pointer
}
.buttonTextDone {
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-shrink: 0;
  border-radius: 24px;
  padding: 18px 10px;
  width: 0vw;
  border-color: transparent;
  justify-content: center;
  cursor: pointer
}

.nameProfile{
  display: flex;
  flex-direction: row; 
}

.deleteButton {
  color: rgba(209, 244, 244, 1);
  height: auto;
  font-size: 14px;
  font-style: Medium;
  margin-top: 0px;
  text-align: right;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
}

.buttonTextDelete {
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-shrink: 0;
  border-radius: 24px;
  padding: 18px 10px;
  width: 0vw;
  border-color: transparent;
  justify-content: center;
  cursor: pointer
}

.profilePic {
  width: 75px;
  height: 75px;
  position: relative;
  border-color: transparent;
  border-radius: 99px;
}

.welcomeText {
  color: rgba(255, 255, 255, 1);
  flex-grow: 1;
  font-size: 20px;
  text-align: center;
  font-style: Medium;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
}

.johnSmithName {
  color: rgba(255, 255, 255, 1);
  flex-grow: 1;
  font-size: 30px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  margin-top: 50px;
  font-weight: 500;
  
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
