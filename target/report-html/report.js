$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuário \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 27,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 28,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuário \"hamude@cucumber.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"123456\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContaSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 4450523430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hamude@cucumber.com",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 174704153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "InserirContaSteps.aSenha(String)"
});
formatter.result({
  "duration": 78163652,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 744996058,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 52065616,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 68871642,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 380673767,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informoAConta(String)"
});
formatter.result({
  "duration": 115866651,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 358803698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 47586170,
  "status": "passed"
});
formatter.after({
  "duration": 284804835,
  "status": "passed"
});
formatter.after({
  "duration": 16642399136,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuário \"hamude@cucumber.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"123456\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContaSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3583642452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hamude@cucumber.com",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 121352015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "InserirContaSteps.aSenha(String)"
});
formatter.result({
  "duration": 72073181,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 807471186,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 38206778,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 75896238,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 368341854,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informoAConta(String)"
});
formatter.result({
  "duration": 53559722,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 393936523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 39190131,
  "status": "passed"
});
formatter.after({
  "duration": 275776201,
  "status": "passed"
});
formatter.after({
  "duration": 16878567168,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuário \"hamude@cucumber.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"123456\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContaSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3598186807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hamude@cucumber.com",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 132749803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "InserirContaSteps.aSenha(String)"
});
formatter.result({
  "duration": 76989536,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 751243653,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 44356324,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 66586177,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 361040754,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "informo a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "seleciono salvar",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informoAConta(String)"
});
formatter.result({
  "duration": 112074773,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 342394376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 37915915,
  "status": "passed"
});
formatter.after({
  "duration": 292118652,
  "status": "passed"
});
formatter.after({
  "duration": 631605635,
  "status": "passed"
});
});