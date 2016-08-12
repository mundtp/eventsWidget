import React from 'react'
import ReactDOM from 'react-dom'

var date1 = new Date("5/14/2016");
var quotesToday = 0
var meetingsToday = 0
var opportunitiesToday = 0
var tasksToday = 0
var quotesForWeek = 0
var meetingsForWeek = 0
var opportunitiesForWeek = 0
var tasksForWeek = 0
var quotesForMonth = 0
var meetingsForMonth = 0
var opportunitiesForMonth = 0
var tasksForMonth = 0

let quotes = [
    {
        id: 1,
        name: 'Test Quote',
        expiration_date: '5/14/2016'
    },
    {
        id: 2,
        name: 'Atlatl Quote',
        expiration_date: '5/21/2016'
    },
    {
        id: 3,
        name: 'PriceBooks Quote',
        expiration_date: '5/18/2016'
    }
];
let meetings = [
    {
        id: 1,
        name: 'Test Meeting',
        start_date: '5/24/2016'
    },
    {
        id: 2,
        name: 'Atlatl Meeting',
        start_date: '5/15/2016'
    },
    {
        id: 3,
        name: 'PriceBooks Meeting',
        start_date: '5/19/2016'
    }
];
let tasks = [
    {
        id: 1,
        name: 'Test Task',
        due_date: '5/17/2016'
    },
    {
        id: 2,
        name: 'Atlatl Task',
        due_date: '5/19/2016'
    },
    {
        id: 3,
        name: 'PriceBooks Task',
        due_date: '5/20/2016'
    }
];
let opportunities = [
    {
        id: 1,
        name: 'Test Opportunity',
        expected_close: '5/22/2016'
    },
    {
        id: 2,
        name: 'Atlatl Opportunity',
        expected_close: '5/17/2016'
    },
    {
        id: 3,
        name: 'PriceBooks Opportunity',
        expected_close: '5/19/2016'
    }
];

const app = function() {

	const Header = React.createClass({
		_handleToday: function(){
			var todayNode = document.querySelector('.today')
			var sevenDayNode = document.querySelector('.sevenDay')
			var thirtyDayNode = document.querySelector('.thirtyDay')
			var todayParagraph = document.querySelector('#today')
			var weekParagraph = document.querySelector('#week')
			var monthParagraph = document.querySelector('#month')
			todayNode.style.color = 'navy'
			todayNode.style.border = '5px solid green'
			sevenDayNode.style = {}
			thirtyDayNode.style = {}
			todayParagraph.style.display = 'block'
			weekParagraph.style.display = 'none'
			monthParagraph.style.display = 'none'

		},
		_handle7day: function(){
			var todayNode = document.querySelector('.today')
			var sevenDayNode = document.querySelector('.sevenDay')
			var thirtyDayNode = document.querySelector('.thirtyDay')
			var todayParagraph = document.querySelector('#today')
			var weekParagraph = document.querySelector('#week')
			var monthParagraph = document.querySelector('#month')
			sevenDayNode.style.color = 'navy'
			sevenDayNode.style.border = '5px solid green'
			todayNode.style = {}
			thirtyDayNode.style = {}
			todayParagraph.style.display = 'none'
			weekParagraph.style.display = 'block'
			monthParagraph.style.display = 'none'
			
		},
		_handle30day: function(){
			var todayNode = document.querySelector('.today')
			var sevenDayNode = document.querySelector('.sevenDay')
			var thirtyDayNode = document.querySelector('.thirtyDay')
			var todayParagraph = document.querySelector('#today')
			var weekParagraph = document.querySelector('#week')
			var monthParagraph = document.querySelector('#month')
			thirtyDayNode.style.color = 'navy'
			thirtyDayNode.style.border = '5px solid green'
			sevenDayNode.style = {}
			todayNode.style = {}
			todayParagraph.style.display = 'none'
			weekParagraph.style.display = 'none'
			monthParagraph.style.display = 'block'
		},
		_quotesCount: function(arr){
			arr.forEach(function(obj){
			    let date2 = new Date (obj.expiration_date)
			    var timeDiff = Math.abs(date1.getTime() - date2.getTime());
			    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
				if(diffDays < 1){
					quotesToday += 1
				}
				if(diffDays < 7){
					quotesForWeek += 1
				}
				if(diffDays < 30){
					quotesForMonth += 1
				}
		    })	
		},
		_meetingsCount: function(arr){
			arr.forEach(function(obj){
		        let date2 = new Date (obj.start_date)
		        var timeDiff = Math.abs(date1.getTime() - date2.getTime());
		        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
				if(diffDays < 1){
					meetingsToday += 1
				}
				if(diffDays < 7){
					meetingsForWeek += 1
				}
				if(diffDays < 30){
					meetingsForMonth += 1
				}
			})	
		},
		_opportunitiesCount: function(arr){
			arr.forEach(function(obj){
		        let date2 = new Date (obj.expected_close)
		        var timeDiff = Math.abs(date1.getTime() - date2.getTime());
		        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
				if(diffDays < 1){
					opportunitiesToday += 1
				}
				if(diffDays < 7){
					opportunitiesForWeek += 1
				}
				if(diffDays < 30){
					opportunitiesForMonth += 1
				}
			})	
		},
		_tasksCount: function(arr){
			arr.forEach(function(obj){
		        let date2 = new Date (obj.due_date)
		        var timeDiff = Math.abs(date1.getTime() - date2.getTime());
		        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
		        if(diffDays < 1){
					tasksToday += 1
				}
				if(diffDays < 7){
					tasksForWeek += 1
				}
				if(diffDays < 30){
					tasksForMonth += 1
				}
			})	
		},
		render: function(){
			this._quotesCount(quotes)
			this._meetingsCount(meetings)
			this._opportunitiesCount(opportunities)
			this._tasksCount(tasks)

			return 	<div className='header'>
						<h4>Upcoming</h4>
						<div className="today" onClick={this._handleToday}>Today</div>
						<div className="sevenDay" onClick={this._handle7day}>7 Day</div>
						<div className="thirtyDay" onClick={this._handle30day}>30 Day</div>
						<p id='today'><a>Meetings: {meetingsToday}</a>
										<a>Tasks: {tasksToday}</a>
										<a>Opportunities: {opportunitiesToday}</a>
										<a>Quotes: {quotesToday}</a>
						</p>
						<p id='week'><a>Meetings: {meetingsForWeek}</a>
										<a>Tasks: {tasksForWeek}</a>
										<a>Opportunities: {opportunitiesForWeek}</a>
										<a>Quotes: {quotesForWeek}</a>
						</p>
						<p id='month'><a>Meetings: {meetingsForMonth}</a>
										<a>Tasks: {tasksForMonth}</a>
										<a>Opportunities: {opportunitiesForMonth}</a>
										<a>Quotes: {quotesForMonth}</a>
						</p>
					</div>

		},
	
	})

	ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()