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

const SelectSubject = props => (
  <div>
    <CardText>
      <span>{`${props.index + 1}. ${props.qus}`}</span>
      {!!props.pic ? <img src={props.pic} style={{
        width: '100%',
      }}
      /> : null}
    </CardText>
    <CardActions style={styles.block}>
      <RadioButtonGroup name={`${props.index}`} valueSelected={props.ans} onChange={(e, val) => props.fill(val)}>
        {props.select.map((ele, i) =>
          <RadioButton
            label={`${['A', 'B', 'C', 'D'][i]}. ${ele}`}
            value={i}
            key={i}
            style={styles.radioButton}
          />)
        }
      </RadioButtonGroup>
    </CardActions>
  </div>
)

SelectSubject.propTypes = {
  index: PropTypes.number,
  ans: PropTypes.number,
  fill: PropTypes.func,
  qus: PropTypes.string,
  select: PropTypes.shape({
    map: PropTypes.func,
  }),
}

export default SelectSubject
