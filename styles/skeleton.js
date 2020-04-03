export default () => (
  <style jsx global>{`
    .container {
      position: relative;
      width: 1320px;
      margin: 0 auto;
      padding: 0;
    }
    .container .column,
    .container .columns {
      float: left;
      display: inline;
      margin-left: 25px;
      margin-right: 25px;
      margin-top: 25px;
      margin-bottom: 25px;
    }
    .row {
      margin-bottom: 50px;
    }

    .column.alpha,
    .columns.alpha {
      margin-left: 0;
    }
    .column.omega,
    .columns.omega {
      margin-right: 0;
    }

    .container .one.column,
    .container .one.columns {
      width: 60px;
    }
    .container .two.columns {
      width: 170px;
    }
    .container .three.columns {
      width: 280px;
    }
    .container .four.columns {
      width: 390px;
    }
    .container .five.columns {
      width: 500px;
    }
    .container .six.columns {
      width: 610px;
    }
    .container .seven.columns {
      width: 720px;
    }
    .container .eight.columns {
      width: 830px;
    }
    .container .nine.columns {
      width: 940px;
    }
    .container .ten.columns {
      width: 1050px;
    }
    .container .eleven.columns {
      width: 1160px;
    }
    .container .twelve.columns {
      width: 1270px;
    }

    .container .one-fifth.column {
      width: 214px;
    }
    .container .two-fifths.column {
      width: 478px;
    }
    .container .three-fifths.column {
      width: 742px;
    }
    .container .four-fifths.column {
      width: 1006px;
    }

    .container .offset-by-one {
      padding-left: 110px;
    }
    .container .offset-by-two {
      padding-left: 220px;
    }
    .container .offset-by-three {
      padding-left: 330px;
    }
    .container .offset-by-four {
      padding-left: 440px;
    }
    .container .offset-by-five {
      padding-left: 550px;
    }
    .container .offset-by-six {
      padding-left: 660px;
    }
    .container .offset-by-seven {
      padding-left: 770px;
    }
    .container .offset-by-eight {
      padding-left: 880px;
    }
    .container .offset-by-nine {
      padding-left: 990px;
    }
    .container .offset-by-ten {
      padding-left: 1100px;
    }
    .container .offset-by-eleven {
      padding-left: 1210px;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1319px) {
      .container {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        padding: 0;
      }
      .container .column,
      .container .columns {
        float: left;
        display: inline;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .row {
        margin-bottom: 20px;
      }

      .column.alpha,
      .columns.alpha {
        margin-left: 0;
      }
      .column.omega,
      .columns.omega {
        margin-right: 0;
      }

      .container .one.column,
      .container .one.columns {
        width: 80px;
      }
      .container .two.columns {
        width: 180px;
      }
      .container .three.columns {
        width: 280px;
      }
      .container .four.columns {
        width: 380px;
      }
      .container .five.columns {
        width: 480px;
      }
      .container .six.columns {
        width: 580px;
      }
      .container .seven.columns {
        width: 680px;
      }
      .container .eight.columns {
        width: 780px;
      }
      .container .nine.columns {
        width: 880px;
      }
      .container .ten.columns {
        width: 980px;
      }
      .container .eleven.columns {
        width: 1080px;
      }
      .container .twelve.columns {
        width: 1180px;
      }

      .container .one-fifth.column {
        width: 220px;
      }
      .container .two-fifths.column {
        width: 460px;
      }
      .container .three-fifths.column {
        width: 700px;
      }
      .container .four-fifths.column {
        width: 940px;
      }

      // Offsets
      .container .offset-by-one {
        padding-left: 100px;
      }
      .container .offset-by-two {
        padding-left: 200px;
      }
      .container .offset-by-three {
        padding-left: 300px;
      }
      .container .offset-by-four {
        padding-left: 400px;
      }
      .container .offset-by-five {
        padding-left: 500px;
      }
      .container .offset-by-six {
        padding-left: 600px;
      }
      .container .offset-by-seven {
        padding-left: 700px;
      }
      .container .offset-by-eight {
        padding-left: 800px;
      }
      .container .offset-by-nine {
        padding-left: 900px;
      }
      .container .offset-by-ten {
        padding-left: 1000px;
      }
      .container .offset-by-eleven {
        padding-left: 1100px;
      }
    }

    @media only screen and (min-width: 960px) and (max-width: 1199px) {
      .container {
        position: relative;
        width: 960px;
        margin: 0 auto;
        padding: 0;
      }
      .container .column,
      .container .columns {
        float: left;
        display: inline;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .row {
        margin-bottom: 20px;
      }

      .column.alpha,
      .columns.alpha {
        margin-left: 0;
      }
      .column.omega,
      .columns.omega {
        margin-right: 0;
      }

      .container .one.column,
      .container .one.columns {
        width: 60px;
      }
      .container .two.columns {
        width: 140px;
      }
      .container .three.columns {
        width: 220px;
      }
      .container .four.columns {
        width: 300px;
      }
      .container .five.columns {
        width: 380px;
      }
      .container .six.columns {
        width: 460px;
      }
      .container .seven.columns {
        width: 540px;
      }
      .container .eight.columns {
        width: 620px;
      }
      .container .nine.columns {
        width: 700px;
      }
      .container .ten.columns {
        width: 780px;
      }
      .container .eleven.columns {
        width: 860px;
      }
      .container .twelve.columns {
        width: 940px;
      }

      .container .one-fifth.column {
        width: 172px;
      }
      .container .two-fifths.column {
        width: 364px;
      }
      .container .three-fifths.column {
        width: 556px;
      }
      .container .four-fifths.column {
        width: 748px;
      }

      .container .offset-by-one {
        padding-left: 80px;
      }
      .container .offset-by-two {
        padding-left: 160px;
      }
      .container .offset-by-three {
        padding-left: 240px;
      }
      .container .offset-by-four {
        padding-left: 320px;
      }
      .container .offset-by-five {
        padding-left: 400px;
      }
      .container .offset-by-six {
        padding-left: 480px;
      }
      .container .offset-by-seven {
        padding-left: 560px;
      }
      .container .offset-by-eight {
        padding-left: 640px;
      }
      .container .offset-by-nine {
        padding-left: 720px;
      }
      .container .offset-by-ten {
        padding-left: 800px;
      }
      .container .offset-by-eleven {
        padding-left: 880px;
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 959px) {
      .container {
        width: 768px;
      }
      .container .column,
      .container .columns {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .column.alpha,
      .columns.alpha {
        margin-left: 0;
        margin-right: 10px;
      }
      .column.omega,
      .columns.omega {
        margin-right: 0;
        margin-left: 10px;
      }
      .alpha.omega {
        margin-left: 0;
        margin-right: 0;
      }

      .container .one.column,
      .container .one.columns {
        width: 44px;
      }
      .container .two.columns {
        width: 108px;
      }
      .container .three.columns {
        width: 172px;
      }
      .container .four.columns {
        width: 236px;
      }
      .container .five.columns {
        width: 300px;
      }
      .container .six.columns {
        width: 364px;
      }
      .container .seven.columns {
        width: 428px;
      }
      .container .eight.columns {
        width: 492px;
      }
      .container .nine.columns {
        width: 556px;
      }
      .container .ten.columns {
        width: 620px;
      }
      .container .eleven.columns {
        width: 684px;
      }
      .container .twelve.columns {
        width: 748px;
      }

      .container .one-fifth.column {
        width: 133.6px;
      }
      .container .two-fifths.column {
        width: 287.2px;
      }
      .container .three-fifths.column {
        width: 440.8px;
      }
      .container .four-fifths.column {
        width: 594.4px;
      }

      .container .offset-by-one {
        padding-left: 64px;
      }
      .container .offset-by-two {
        padding-left: 128px;
      }
      .container .offset-by-three {
        padding-left: 192px;
      }
      .container .offset-by-four {
        padding-left: 256px;
      }
      .container .offset-by-five {
        padding-left: 320px;
      }
      .container .offset-by-six {
        padding-left: 384px;
      }
      .container .offset-by-seven {
        padding-left: 448px;
      }
      .container .offset-by-eight {
        padding-left: 512px;
      }
      .container .offset-by-nine {
        padding-left: 576px;
      }
      .container .offset-by-ten {
        padding-left: 640px;
      }
      .container .offset-by-eleven {
        padding-left: 704px;
      }
    }

    @media only screen and (min-width: 480px) and (max-width: 767px) {
      .container {
        width: 420px;
      }
      .container .columns,
      .container .column {
        margin-left: 0;
        margin-right: 0;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .container .one.column,
      .container .one.columns,
      .container .two.columns,
      .container .three.columns,
      .container .four.columns,
      .container .five.columns,
      .container .six.columns,
      .container .seven.columns,
      .container .eight.columns,
      .container .nine.columns,
      .container .ten.columns,
      .container .eleven.columns,
      .container .twelve.columns,
      .container .one-fifth.column,
      .container .two-fifths.column,
      .container .three-fifths.column,
      .container .four-fifths.column {
        width: 420px;
      }

      .container .offset-by-one,
      .container .offset-by-two,
      .container .offset-by-three,
      .container .offset-by-four,
      .container .offset-by-five,
      .container .offset-by-six,
      .container .offset-by-seven,
      .container .offset-by-eight,
      .container .offset-by-nine,
      .container .offset-by-ten,
      .container .offset-by-eleven {
        padding-left: 0;
      }
    }

    @media only screen and (max-width: 479px) {
      .container {
        width: 300px;
      }
      .container .columns,
      .container .column {
        margin-left: 0;
        margin-right: 0;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .container .one.column,
      .container .one.columns,
      .container .two.columns,
      .container .three.columns,
      .container .four.columns,
      .container .five.columns,
      .container .six.columns,
      .container .seven.columns,
      .container .eight.columns,
      .container .nine.columns,
      .container .ten.columns,
      .container .eleven.columns,
      .container .twelve.columns,
      .container .one-fifth.column,
      .container .two-fifths.column,
      .container .three-fifths.column,
      .container .four-fifths.column {
        width: 300px;
      }

      .container .offset-by-one,
      .container .offset-by-two,
      .container .offset-by-three,
      .container .offset-by-four,
      .container .offset-by-five,
      .container .offset-by-six,
      .container .offset-by-seven,
      .container .offset-by-eight,
      .container .offset-by-nine,
      .container .offset-by-ten,
      .container .offset-by-eleven {
        padding-left: 0;
      }
    }

    .container:after {
      content: '\\0020';
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    .clearfix:before,
    .clearfix:after,
    .row:before,
    .row:after {
      content: '\\0020';
      display: block;
      overflow: hidden;
      visibility: hidden;
      width: 0;
      height: 0;
    }
    .row:after,
    .clearfix:after {
      clear: both;
    }
    .row,
    .clearfix {
      zoom: 1;
    }

    .clear {
      clear: both;
      display: block;
      overflow: hidden;
      visibility: hidden;
      width: 0;
      height: 0;
    }
  `}</style>
)
