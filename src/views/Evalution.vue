<template>
  <div class="evalution">
    <Nav v-model="activeIndex"></Nav>
    <div class="content">
      <h1>Information Security Knowledge and Awareness Test 1</h1>
      <p>
        Thank you very much for participating in this capstone project. The
        project is part of my study of Master of Science in Information
        Technology Education at The University of Hong Kong. Now you are invited
        to answer some questions about your prior knowledge of information
        security. The test contains 10 questions and will take about 10 minutes.
        The results your answered and the data collected will be kept
        confidential and your name will be anonymous. Your participation in this
        project is entirely voluntary, and all information obtained from this
        study will be used for academic purposes only.
      </p>
      <h3>1. Which of the following could be considered sensitive data?</h3>
      <div class="radio">
        <el-radio-group v-model="radio1">
          <el-radio :label="1">Customer data</el-radio>
          <el-radio :label="2">Financial data</el-radio>
          <el-radio :label="3">Intellectual property</el-radio>
          <el-radio :label="4">All of the above</el-radio>
        </el-radio-group>
      </div>
      <h3>
        2. Manually typing a URL is one of the best ways to confirm you are on
        the correct website.
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio2">
          <el-radio :label="1">True</el-radio>
          <el-radio :label="2">False</el-radio>
        </el-radio-group>
      </div>
      <h3>3. What should you look for when identifying malicious website?</h3>
      <div class="radio">
        <el-radio-group v-model="radio3">
          <el-radio :label="1">Missing lock icon</el-radio>
          <el-radio :label="2">Misspellings</el-radio>
          <el-radio :label="3">Odd URLs</el-radio>
          <el-radio :label="4">All of the above</el-radio>
        </el-radio-group>
      </div>
      <h3>4. What should you do before stepping away from your computer?</h3>
      <div class="radio">
        <el-radio-group v-model="radio4">
          <el-radio :label="1">Unplug it</el-radio>
          <el-radio :label="2">Shut it down</el-radio>
          <el-radio :label="3">Nothing</el-radio>
          <el-radio :label="4">Lock it</el-radio>
        </el-radio-group>
      </div>
      <h3>
        5. All of your company's information should be available to everyone
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio5">
          <el-radio :label="1">True</el-radio>
          <el-radio :label="2">False</el-radio>
        </el-radio-group>
      </div>
      <h3>6. What do scams primarily try to obtain?</h3>
      <div class="radio">
        <el-radio-group v-model="radio6">
          <el-radio :label="1">Servers</el-radio>
          <el-radio :label="2">Money</el-radio>
          <el-radio :label="3">Data</el-radio>
          <el-radio :label="4">Passwords</el-radio>
        </el-radio-group>
      </div>
      <h3>
        7. You should never authorize financial transactions via email alone.
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio7">
          <el-radio :label="1">True</el-radio>
          <el-radio :label="2">False</el-radio>
        </el-radio-group>
      </div>
      <h3>8. What does VPN stand for?</h3>
      <div class="radio">
        <el-radio-group v-model="radio8">
          <el-radio :label="1">Virtual Protection Network</el-radio>
          <el-radio :label="2">Virtual Protection Network</el-radio>
          <el-radio :label="3">Virtual Protected Network</el-radio>
          <el-radio :label="4">Virtual Private Network</el-radio>
        </el-radio-group>
      </div>
      <h3>
        9. A company’s ability to protect data that should be restricted to a
        specified set of persons or organizations is known as:
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio9">
          <el-radio :label="1">Confidentiality</el-radio>
          <el-radio :label="2">Availability</el-radio>
          <el-radio :label="3">Integrity</el-radio>
          <el-radio :label="4">Secrecy</el-radio>
        </el-radio-group>
      </div>
      <h3>
        10. You should always have strong passcodes on all of your devices.
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio10">
          <el-radio :label="1">True</el-radio>
          <el-radio :label="2">False</el-radio>
        </el-radio-group>
      </div>
      <h1>Information Security Knowledge and Awareness Test 2</h1>
      <p>
        Thank you very much for participating in this capstone project. The
        project is part of my study of Master of Science in Information
        Technology Education at The University of Hong Kong. Now you are invited
        to answer some questions after you have learned the knowledge of
        information security on our training website. The test contains 10
        questions and will take about 10 minutes. The results your answered and
        the data collected will be kept confidential and your name will be
        anonymous. Your participation in this project is entirely voluntary, and
        all information obtained from this study will be used for academic
        purposes only.
      </p>
      <h3>1. Which of the following could be considered sensitive data?</h3>
      <div class="radio">
        <el-radio-group v-model="radio11">
          <el-radio :label="1">Customer data</el-radio>
          <el-radio :label="2">Financial data</el-radio>
          <el-radio :label="3">Intellectual property</el-radio>
          <el-radio :label="4">All of the above</el-radio>
        </el-radio-group>
      </div>
      <h3>
        2. Manually typing a URL is one of the best ways to confirm you are on
        the correct website.
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio12">
          <el-radio :label="1">True</el-radio>
          <el-radio :label="2">False</el-radio>
        </el-radio-group>
      </div>
      <h3>3. What should you look for when identifying malicious website?</h3>
      <div class="radio">
        <el-radio-group v-model="radio13">
          <el-radio :label="1">Missing lock icon</el-radio>
          <el-radio :label="2">Misspellings</el-radio>
          <el-radio :label="3">Odd URLs</el-radio>
          <el-radio :label="4">All of the above</el-radio>
        </el-radio-group>
      </div>
      <h3>4. What should you do before stepping away from your computer?</h3>
      <div class="radio">
        <el-radio-group v-model="radio14">
          <el-radio :label="1">Unplug it</el-radio>
          <el-radio :label="2">Shut it down</el-radio>
          <el-radio :label="3">Nothing</el-radio>
          <el-radio :label="4">Lock it</el-radio>
        </el-radio-group>
      </div>
      <h3>
        5. All of your company’s information should be available to everyone
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio15">
          <el-radio :label="1">True</el-radio>
          <el-radio :label="2">False</el-radio>
        </el-radio-group>
      </div>
      <h3>6. What do scams primarily try to obtain?</h3>
      <div class="radio">
        <el-radio-group v-model="radio16">
          <el-radio :label="1">Servers</el-radio>
          <el-radio :label="2">Money</el-radio>
          <el-radio :label="3">Data</el-radio>
          <el-radio :label="4">Passwords</el-radio>
        </el-radio-group>
      </div>
      <h3>
        7. You should never authorize financial transactions via email alone.
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio17">
          <el-radio :label="1">True</el-radio>
          <el-radio :label="2">False</el-radio>
        </el-radio-group>
      </div>
      <h3>8. What does VPN stand for?</h3>
      <div class="radio">
        <el-radio-group v-model="radio18">
          <el-radio :label="1">Virtual Protection Network</el-radio>
          <el-radio :label="2">Virtual Protection Network</el-radio>
          <el-radio :label="3">Virtual Protected Network</el-radio>
          <el-radio :label="4">Virtual Private Network</el-radio>
        </el-radio-group>
      </div>
      <h3>
        9. A company’s ability to protect data that should be restricted to a
        specified set of persons or organizations is known as:
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio19">
          <el-radio :label="1">Confidentiality</el-radio>
          <el-radio :label="2">Availability</el-radio>
          <el-radio :label="3">Integrity</el-radio>
          <el-radio :label="4">Secrecy</el-radio>
        </el-radio-group>
      </div>
      <h3>
        10. You should always have strong passcodes on all of your devices.
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio20">
          <el-radio :label="1">True</el-radio>
          <el-radio :label="2">False</el-radio>
        </el-radio-group>
      </div>
      <h1>The Website Usability Questionnaire Survey</h1>
      <p>
        Thank you very much for participating in this capstone project. The
        project is part of my study of Master of Science in Information
        Technology Education at The University of Hong Kong. Now you are invited
        to answer some questions based on your experience of going through the
        online training after you have learned the content and went through the
        entire website. The questionnaire survey contains 11 questions and will
        take about 11 minutes. The 5-point Likert scale will be used to collect
        feedback from users for the purpose of future product development. The
        rating of the website ranges from 1 to 5. The scale of 1 means least
        effective and the scale of 5 means most effective. The results your
        answered and the data collected will be kept confidential and your name
        will be anonymous. Your participation in this project is entirely
        voluntary, and all information obtained from this study will be used for
        academic purposes only.
      </p>
      <h3>1. Page titles and headings of the website were used effectively?</h3>
      <div class="radio">
        <el-radio-group v-model="radio21">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>2. Page Length was appropriate for the site?</h3>
      <div class="radio">
        <el-radio-group v-model="radio22">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>3. The site used sound navigational principles?</h3>
      <div class="radio">
        <el-radio-group v-model="radio23">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>4. Graphics were used effectively on the site?</h3>
      <div class="radio">
        <el-radio-group v-model="radio24">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>5. The use of fonts was appropriate for the site?</h3>
      <div class="radio">
        <el-radio-group v-model="radio25">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>
        6. The content layout and organization were appropriate for the site?
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio26">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>7. The overall quality of the course design?</h3>
      <div class="radio">
        <el-radio-group v-model="radio27">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>8. The content of the site was sufficient for the learner?</h3>
      <div class="radio">
        <el-radio-group v-model="radio28">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>9. The gamification was appropriate for the site.</h3>
      <div class="radio">
        <el-radio-group v-model="radio29">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>
        10. The users’ overall learning experience, such as the site’s
        engagement, usefulness and the users’ satisfaction.
      </h3>
      <div class="radio">
        <el-radio-group v-model="radio30">
          <el-radio :label="1">1</el-radio>
          <el-radio :label="2">2</el-radio>
          <el-radio :label="3">3</el-radio>
          <el-radio :label="4">4</el-radio>
          <el-radio :label="5">5</el-radio>
        </el-radio-group>
      </div>
      <h3>
        11. Do you have any suggestions or ideas for future improvement and
        development of the site?
      </h3>
      <el-input
        type="textarea"
        style="margin-top: 30px"
        :rows="5"
        v-model="answer1"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav,
  },
  data: () => ({
    activeIndex: 4,
    radio1: null,
    radio2: null,
    radio3: null,
    radio4: null,
    radio5: null,
    radio6: null,
    radio7: null,
    radio8: null,
    radio9: null,
    radio10: null,
    radio11: null,
    radio12: null,
    radio13: null,
    radio14: null,
    radio15: null,
    radio16: null,
    radio17: null,
    radio18: null,
    radio19: null,
    radio20: null,
    radio21: null,
    radio22: null,
    radio23: null,
    radio24: null,
    radio25: null,
    radio26: null,
    radio27: null,
    radio28: null,
    radio29: null,
    radio30: null,
    answer1: "",
  }),
};
</script>

<style lang="less" scoped>
.evalution {
  background: rgba(13, 37, 71, 1);
  padding-bottom: 100px;
  color: #bfcefb;
  .content {
    padding: 0 10%;
    h1 {
      margin-top: 50px;
      text-align: center;
    }
    p {
      margin: 30px 0;
    }
    h3 {
      text-align: center;
    }
    .radio {
      margin: 30px 0;
      display: flex;
      justify-content: center;
      & /deep/ .el-radio__label {
        color: #bfcefb;
      }
    }
  }
  & /deep/ textarea {
    border: 0;
    background-color: #64739c;
    color: #bfcefb;
    resize: none;
  }
}
</style>
