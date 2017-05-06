import React from 'react'
import PropTypes from 'prop-types'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import { CardActions, CardText } from 'material-ui/Card'

const styles = {
  block: {
    padding: '0 16px',
  },
  radioButton: {
    marginBottom: 16,
  },
}

const JudgeSubject = props => (
  <div>
    <CardText>
      <span>{`${props.index + 1}. ${props.qus}`}</span>
    </CardText>
    <CardActions style={styles.block}>
      <RadioButtonGroup
        valueSelected={props.ans}
        name={`${props.index}`}
        onChange={(e, val) => props.fill(val)}
      >
        <RadioButton
          value
          label="正确"
          style={styles.radioButton}
        />
        <RadioButton
          value={false}
          label="错误"
          style={styles.radioButton}
        />
      </RadioButtonGroup>
    </CardActions>
  </div>
)

JudgeSubject.propTypes = {
  index: PropTypes.number,
  ans: PropTypes.any,
  fill: PropTypes.func,
  qus: PropTypes.string,
}

export default JudgeSubject
