import React from 'react'
import { Card, CardMedia, CardTitle, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'


const CardExampleExpandable = () => (
  <div>
    <Card
      style={{
        width: '100%',
      }}
    >
      <CardHeader
        title="想成为我们的专栏作家吗？"
        subtitle="丰厚的稿酬在等着你!"
        actAsExpander
        showExpandableButton
      />
      <CardText style={{ paddingTop: 0 }} expandable>
        <div style={{ width: '100%', maxHeight: 400, margin: 'auto' }}>
          <Stepper activeStep={0} orientation="vertical">
            <Step>
              <StepLabel style={{ fontWeight: 800 }}>投稿专栏作品获得批准</StepLabel>
              <StepContent>
                <p>我们看重你的文采和学识，但我们更希望你有一颗帮助其他学子的内心。</p>
                <RaisedButton
                  label="我要投稿"
                  disableFocusRipple
                  primary
                  style={{ marginTop: 10 }}
                />
              </StepContent>
            </Step>
            <Step>
              <StepLabel style={{ fontWeight: 800 }}>发送学籍信息与成绩证明到social@zuodao.com</StepLabel>
              <StepContent>
                <p>请实名认证，诚信是做人的基本原则，我们会根据你的信息来为你寻找合适的读者。</p>
              </StepContent>
            </Step>
            <Step>
              <StepLabel style={{ fontWeight: 800 }}>耐心等待我们的审核</StepLabel>
              <StepContent>
                <p>我们将会在5个工作日之内进行审核，请耐心等待。</p>
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </CardText>
    </Card>
    <Card>
      <CardHeader
        title="学神胡志强的专栏"
        subtitle="2017-04-28"
        avatar="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3286316871,1280892216&fm=21&gp=0.jpg"
      />
      <CardMedia
        overlay={<CardTitle title="微积分拿满分的秘诀" subtitle="分类：数学，微积分" />}
      >
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493728822226&di=9a90ad4a2ded40ecf546b270f5dc8cb5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb219ebc4b74543a93b7e8e921a178a82b9011402.jpg" />
      </CardMedia>
      <CardText className="pro">
        为什么你们考微积分拿不了100分？为什么我可以？我就是一学渣，我都没好好学习，我哪道题都不会，考试我啥都没复习，我考砸了，上节课我睡过去的
        ，昨天又没写作业
        ，我不是学霸
        ，这道题我也不会
        ，我作业全都是瞎写。
        为什么你们考微积分拿不了100分？为什么我可以？我就是一学渣，我都没好好学习，我哪道题都不会，考试我啥都没复习，我考砸了，上节课我睡过去的
        ，昨天又没写作业
        ，我不是学霸
        ，这道题我也不会
        ，我作业全都是瞎写。
        为什么你们考微积分拿不了100分？为什么我可以？我就是一学渣，我都没好好学习，我哪道题都不会，考试我啥都没复习，我考砸了，上节课我睡过去的
        ，昨天又没写作业
        ，我不是学霸
        ，这道题我也不会
        ，我作业全都是瞎写。
      </CardText>
    </Card>
  </div>
)

export default CardExampleExpandable
