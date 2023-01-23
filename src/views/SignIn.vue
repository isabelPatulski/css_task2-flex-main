
<template>
    <div class="mainInputClass">
    <span class="logo"><span>StarEvents</span></span>
        <span class="welcomeText"> <span>Welcome back</span>
        </span>
        <span class="logInText"> <span>Log in below</span>
        </span>
              <input type="text" placeholder="Email"/>
               <input type="text" placeholder="Password" />
              <span class="forgotPasswordText"> <span>Forgot Password?</span>
              </span>
        <a href="/home" class= "button"> 
        <span class="signInTxt"><span>Sign In</span></span></a>
           <span class="vedIkke">
                <span class="dontHaveText">
                  Dont have an account?
                  </span>
                  <a href="/signUp" class="doneButton">
                <span class="blueText">Sign Up here</span></a>
              </span>
    </div>
</template>

<script>
export default {
  name: "About",
  created() {
    document.body.style.backgroundColor = "#FFFFFF";
  },

  name: 'Login',
  data() {
      return {
          input: {
              username: "",
              password: ""
          }
      }
  },

  methods: {
              login() {
    if(this.input.username != "" && this.input.password != "") {
        if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "secure" });


        } else {
            console.log("Username or password is incorrect");
        }
    } else {
        console.log("A username and password must be present");
    }
}
            }
          }
</script>
  

<style scoped>
.mainInputClass {
  margin-top: 70px;
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



