import React from 'react';
import MUIDataTable from "mui-datatables";

class Table extends React.Component{
	constructor(props){
		super(props);
	}
	render(){    
    const columns = [
        {
          label: 'Name',
          name: 'Player',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'Pos',
          name: 'Pos',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'Age',
          name: 'Age',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'Team',
          name: 'Team',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'GP',
          name: 'G',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'GS',
          name: 'GS',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'MP',
          name: 'MP',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'FTP',
          name: 'FTP',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'PTS',
          name: 'PTS',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'AST',
          name: 'AST',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'TRB',
          name: 'TRB',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'ORB',
          name: 'ORB',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'DRB',
          name: 'DRB',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'STL',
          name: 'STL',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'BLK',
          name: 'BLK',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'FGM',
          name: 'FG',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'FGA',
          name: 'FGA',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'FG%',
          name: 'FGper',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: '3PM',
          name: '3P',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: '3PA',
          name: '3PA',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: '3P%',
          name: '3Pper',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: '2PM',
          name: '2P',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: '2PA',
          name: '2PA',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: '2P%',
          name: '2Pper',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'eFG%',
          name: 'eFGper',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'FTM',
          name: 'FT',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'FTA',
          name: 'FTA',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'FT%',
          name: 'FTper',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'TOV',
          name: 'TOV',
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          label: 'PF',
          name: 'PF',
          options: {
            filter: true,
            sort: true,
          },
        },
      ];

    var GP = this.props.categoryValues[0];
    var GS = this.props.categoryValues[1];
    var MIN = this.props.categoryValues[2];
    var FGM = this.props.categoryValues[3];
    var FGA = this.props.categoryValues[4];
    var FTM = this.props.categoryValues[5];
    var FTA = this.props.categoryValues[6];
    var threePM = this.props.categoryValues[7];
    var threePA = this.props.categoryValues[8];
    var ORB = this.props.categoryValues[9];
    var DRB = this.props.categoryValues[10];
    var REB = this.props.categoryValues[11];
    var AST = this.props.categoryValues[12];
    var STL = this.props.categoryValues[13];
    var BLK = this.props.categoryValues[14];
    var TO = this.props.categoryValues[15];
    var PF = this.props.categoryValues[16];
    var PTS = this.props.categoryValues[17];

    this.props.data.map(player => {
      player.Player = String(player.Player).split('_')[0];
      player.FTP = (GP * player.G) + (GS * player.GS) + (MIN * player.MP) + (FGM * player.FG)
       + (FTM * player.FT) + (FTA * player.FTA) + (threePM * player['3P']) + (threePA * player['3PA'])
       + (ORB * player.ORB) + (DRB * player.DRB) + (REB * player.TRB) + (AST * player.AST) + (STL * player.STL)
       + (BLK * player.BLK) + (TO * player.TOV) + (PF * player.PF) + (PTS * player.PTS);
      player.FTP = Math.round(player.FTP * 100) / 100;
    })

    const data = this.props.data;

    const options = {
      selectableRows: false,
      rowHover: true,
      rowsPerPage: 20,
      rowsPerPageOptions: [10, 20, 50, 100],
    };

		return(
      <div className="Table" style={{margin: "0 auto"}}>
        <MUIDataTable title={this.props.season} data={data} columns={columns} options={options}/>
      </div>
		)
	}
}

export default Table; 