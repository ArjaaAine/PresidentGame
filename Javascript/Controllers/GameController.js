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

        game.startGame = function () {
            if (game.baseStats.leaderName.length === 0 ) {
                game.validation.initLeaderName = false;
            } else {
                game.validation.initLeaderName = true;
            }

            if (!game.baseStats.selectedParty) {
                game.validation.initPartySelection = false;
            } else if (game.baseStats.selectedParty.name !== 'Republican Party') {
                game.validation.initPartySelection = false;

            } else {
                game.validation.initPartySelection = true;
            }
        };

    });