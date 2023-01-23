
<template>
    <div class="mainInputClass">
    <span class="logo"><span>StarEvents</span></span>
        <span class="welcomeText"> <span>Create an account</span>
        </span>
        <span class="logInText"> <span>Sign up below</span>
        </span>
              <input type="text" placeholder="First name"/>
               <input type="text" placeholder="Last name" />
               <input type="text" placeholder="Email"/>
               <input type="text" placeholder="Password" />
              <span class="forgotPasswordText"> <span>Forgot Password?</span>
              </span>
        <a href="/home" class= "createButton"> 
        <span class="signInTxt"><span>Sign up</span></span></a>
   
    <div class="donthaveSignIn"> 
           <span class="vedIkke">
                <span class="dontHaveText">
                  Already have an account? 
                  </span>
            </span>
               <a href="/" class= "button"> 
            <span class="blueText"><span> Sign in here</span></span></a>
        </div>
    </div>
</template>

<script>
export default {
  name: "About",
  created() {
    document.body.style.backgroundColor = "#FFFFFF";
  },
};
</script>
  

<style scoped>
.mainInputClass {
  margin-top: 150px;
  left: 25px;
  height: 380px;
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
  margin-bottom: 30px;
  font-family: Poppins;
  font-size: 16px;
  width: 65vw;
  padding: 18px 10px;
  border-color: transparent;
  background-color: #F5F5F5;
}


.welcomeText {
  color: rgba(10, 13, 20, 1);
  font-size: 30px;
  align-self: stretch;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  margin-bottom: 11px;
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

.donthaveSignIn {
    display:flex;
  flex-direction: row;
  justify-content: space-between;
}

.createButton {
  color:rgba(246, 185, 52, 0.525);
  display: flex;
  padding: 16px 70px;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 24px;
  margin-bottom: 19px;
  justify-content: center;
  background-color: rgba(246, 185, 52, 0.823);
}

.logInText {
  color: rgba(10, 13, 20, 1);
  height: auto;
  opacity: 0.50;
  font-size: 14px;
  align-self: stretch;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
}

.emailText {
  color: rgba(151, 151, 151, 1);
  height: auto;
  flex-grow: 1;
  font-size: 16px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 160.0000023841858%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.dontHaveText {
  color: rgba(10, 13, 20, 1);
  height: auto;
  opacity: 0.50;
  font-size: 14px;
  align-self: stretch;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
}

.blueText{
   color: #48D1CC;
  height: auto;
  opacity: 0.50;
  font-size: 14px;
  align-self: stretch;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
  text-decoration: underline
}


.password {
  color: rgba(151, 151, 151, 1);
  height: auto;
  flex-grow: 1;
  font-size: 16px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  line-height: 160.0000023841858%;
  font-stretch: normal;
  margin-right: 10px;
  margin-bottom: 0;
  text-decoration: none;
}

.forgotPasswordText {
  color: rgba(10, 13, 20, 1);
  height: auto;
  flex-grow: 1;
  font-size: 12px;
  align-self: auto;
  font-style: SemiBold;
  text-align: center;
  font-family: Poppins;
  font-weight: 600;
  line-height: 170.00000476837158%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.button {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 24px;
  margin-bottom: 19px;
  justify-content: center;
  
}


.signInTxt {
  color: rgba(249, 250, 251, 1);
  height: auto;
  flex-grow: 1;
  font-size: 12px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 170.00000476837158%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}


</style>



