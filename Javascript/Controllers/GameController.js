'use strict';

wtpApp.controller(
    'GameController',
    function (
        $scope,
        $interval,
        situationData
       ) {

        var game = this;

        game.situation = situationData;

        var saveGame = function () {
            game.situation.functions.saveData();
            localStorage['gameData'] = JSON.stringify(game.data);
        };
        var resetGame = function () {
            game.data = {
                init: {
                    isFirstTime: true
                }
            };
            game.situation.functions.resetData();
            localStorage.clear();
        };
        var saveTimer = $interval(saveGame, 5000);

        //Load Game's Settings
        if (!localStorage['gameData']) {
            game.data = {
                init: {
                    isFirstTime: false
                }
            };
        }
        else {
            game.data = JSON.parse(localStorage['gameData']);
        }

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

        game.selectedChoice = function (situationId, choiceId) {

            var situation = $.grep(game.situation.baseData.situations, function (sit) {
                return sit.SituationId == situationId;
            });
            game.data.activeSituation = situation[0];

            if (game.data.activeSituation.choices) {
                for (var i = 0; i < game.data.activeSituation.choices.length; i++) {
                    var result = $.grep(game.situation.baseData.choices, function (choice) {
                        return choice.ChoiceId == game.data.activeSituation.choices[i].ChoiceId;
                    });

                    game.data.activeSituation.choices[i].ChoiceText = result[0].ChoiceText;
                }
            }
        };

        game.startGame = function () {
            if (game.baseStats.leaderName.length === 0) {
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

            if (game.validation.initLeaderName && game.validation.initPartySelection) {
                game.data.init.isFirstTime = false;
            }

            //Setting up the first situation
            game.data.activeSituation = game.situation.baseData.situations[0];

            for (var i = 0; i < game.data.activeSituation.choices.length; i++) {
                var result = $.grep(game.situation.baseData.choices, function (choice) {
                    return choice.ChoiceId == game.data.activeSituation.choices[i].ChoiceId;
                });

                game.data.activeSituation.choices[i].ChoiceText = result[0].ChoiceText;
            }
        };
        game.saveGame = function () {
            saveGame();
        };
        game.resetGame = function () {
            resetGame();
        };

    });