'use strict';

wtpApp.controller(
    'GameController',
    function (
        $scope,
        $interval
       ) {

        var game = this;
        game.data = {
            init: {
                isFirstTime: true
            }
        };

        game.validation = {
            initLeaderName: true,
            initPartySelection: true
        }

        game.baseStats = {
            selectedParty: {},
            leaderName: ''
        }

        game.lookup = {
        };

        game.lookup.parties = [
            {
                name: 'Republican Party',
                selectionText: 'Congrats! You selected the party worthy of a patriot!'
            },
            {
                name: 'Democratic Party',
                selectionText: 'Are you a freeloading socialist? Select the true party for the patriots!'
            }
        ]

    });