import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash' //유틸리티라이브러리

function average(data) {
  return _.round(_.sum(data)/data.length)
}

export default function Chart(props) {
  return(
    <div>
      <Sparklines data={props.data} width={180} height={120}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}{props.units}</div>
    </div>
  );
}