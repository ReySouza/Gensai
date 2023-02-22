const data = {
   name: 'Kawakami Gensai',
  player: 'Dolenc',
  occupation: 'Onmyouji',
  age: '',
  sex: 'male',
  birthplace: 'Heian-kyo',
  points: 0,
  energy: 11,
  season: 11,
  focus: 1,

  life: {
    current: 19,
    max: 50,
  },

  sanity: {
    current: 16,
    max: 22,
  },

  stamina: {
    current: 0,
    max: 12,
  },

   mana: {
    current: 18,
    max: 30,
  },

  weapons: [
    {
      name: 'Bastão',
      type: 'Bastão',
      damage: '2d6+5',
      attack: 'Dex-3',
    },
      {
      name: 'Garra do Nyuudo',
      type: 'Outro',
      damage: '3d6',
      attack: 'Dex',
    },
      {
      name: 'Mordida do Nyuudo',
      type: 'Outro',
      damage: '4d6',
      attack: 'Dex-2',
    },
  ],

  attributes: [
    {
      type: 'Força',
      amount: 13,
    },
    {
      type: 'Dextreza',
      amount: 12,
    },
    {
      type: 'Inteligência',
      amount: 10,
    },
    {
      type: 'Saúde',
      amount: 12,
    },
    {
      type: 'Vontade',
      amount: 10,
    },
    {
      type: 'Percepção',
      amount: 12,
    },
    {
      type: 'Carisma',
      amount: 10,
    },
    {
      type: 'Intimidação',
      amount: 12,
    },
    {
      type: 'Parry',
      amount: 12,
    },
    {
      type: 'Bloqueio',
      amount: 14,
    },
    {
      type: 'Esquiva',
      amount: 10,
    },
  ],

    expertise: [
    {
      name: 'Equílibrio Perfeito',
      cost: 8,
      description: 'O personagem sempre irá conseguir se manter em pé, se a superfície estiver úmida, escorregadia ou instável, ele recebe +3 para se manter em pé, +1 se estiver em combate',
    },
      {
      name: 'Reflexos de Combate',
      cost: 5,
      description: '+1 em jogadas de defesa ativa como parry, esquiva e bloqueio e +6 para testes de vontade para acordar',
    },
      {
      name: 'Naginatajutsu',
      cost: 0,
      description: '+1 em testes com bastões e naginata, +1 para testes de linguagem corporal e teologia Budista',
    },
      {
      name: 'Bloqueio Ampliado',
      cost: 5,
      description: '+1 em testes de bloqueio com escudo ou parry',
    },
      {
      name: 'Visão Noturna',
      cost: 1,
      description: 'Pode ignorar 1 modificador de escuridão',
    },
      {
      name: 'Inteligência Ancestral',
      cost: 0,
      description: 'Seu Nyuudo existe desde o período Heiano, ele possui conhecimento sobre muitas coisas e faz testes de IQ com +1',
    },
      {
      name: 'Noção de Perigo',
      cost: 6,
      description: 'Em alguns momentos, seu personagem pode sentir que existe algo errado',
    },
      {
      name: 'Hipoalgia',
      cost: 6,
      description: '+3 para evitar quedas e resistir a dor física',
    },
      {
      name: 'Flexibilidade',
      cost: 4,
      description: '+3 em testes de escalada e fuga',
    },
  ],
        expertise2: [
    {
      name: '妖術 ~ Tomar Forma',
      type: 'Youjutsu',
      cost: 6,
      damage: 0,
      time: '1 turno',
      duration: '1 hora',
      description: 'Seu Nyuudo pode assumir uma forma humana genérica, ele pode também imitar a aparência de alguém mas, deve suceder em um teste de VON para isso',
    },
    {
      name: '妄執剣 ~ Sangue de Asura',
      type: 'Youjutsu',
      cost: '3 por turno',
      damage: '6d6',
      time: '1 turno',
      duration: 'indefinido',
      description: 'Como um Asura, 4 braços aparecem em seu corpo além dos originais, faça um teste de IQ, se você suceder, você conseguirá atacar no mesmo turno, falhe e você atacará no próximo, ao fim do ataque, você fará um teste de fátiga -2 para cada turno em que usou a habilidade',
    },
    {
      name: '妖術 ~ Liberar Nyuudo',
      type: 'Youjutsu',
      cost: 2,
      damage: 0,
      time: '1 turno',
      duration: '',
      description: 'O espírito do seu Nyuudo é liberado do anel, você consegue invocar até 4 braços e 2 cabeças ao suceder em um teste de IQ',
    },
   {
      name:  'Vento mortal de Penitencia',
      type: 'Youjutsu',
      cost: 4,
      damage: 0,
      time: '1 reação',
      duration: '2 turnos',
      description: 'No momento em que você ou o Nyuudo executarem um ataque, o outro pode gastar uma reação e fazer um ataque em conjunto, este ataque exigirá um unico teste para dar certo e 2 parrys para ser interrompido',
    },
   {
      name: 'Rugido Trovejante',
      type: 'Youjutsu',
      cost: 5,
      damage: 0,
      time: '1 turno',
      duration: '1d6 turnos',
      description: 'Você cria um campo de força ao redor do seu bastão, o campo de força irá empurrar qualquer alvo em até 30ft, durant este período, o bastão terá sucesso contra qualquer teste de Parry e o usuário não tomará dano quando fizer um bloqueio',
    },
      {
      name: 'Rugido Trovejante Celestial',
      type: 'Youjutsu',
      cost: 3,
      damage: 0,
      time: '1 turno',
      duration: '1d4 turnos',
      description: 'O Nyuudo irá rugir, os céus se abrem e a terra treme, em um cone de 30ft, todos aqueles afetados serão intimidados e usarão sua reação para se afastarem do ataque durante 1d4 turnos',
    },
       {
      name: 'Grande Cumulus de Ira',
      type: 'Youjutsu',
      cost: 3,
      damage: 0,
      time: '1 turno',
      duration: '1d4 turnos',
      description: 'Como parte de sua sinergia maior, você é envolvido em uma névoa densa, esta névos se adere ao seu corpo formando uma armadura dracônica ao seu redor, esta armadura te fornece um modificador de +2 para defesa ativa e reduz todo dano que você tomar pela metade',
    },
      {
      name: '-裏夏  ~ Labaredas no Mt.Atago',
      type: 'Sazonal',
      cost: 1,
      damage: '2d6+4',
      time: '1 turno',
      duration: '1 turno + bônus',
      description: 'O chão começará a pegar fogo em uma área de 10ft ao redor de você, qualquer criatura pega sofrerá 2d6+4 de dano caso falhe um teste de DEX. Aqueles que falharem o teste entrarão em combustão novamente tomando 1d6 de dano durante 3 turnos',
    },
     {
      name: '裏夏 ~ Vajra de Mahavairocana',
      type: 'Sazonal',
      cost: 1,
      damage: '2d6',
      time: '1 turno',
      duration: '1d6+1 turnos',
      description: 'O Nyuudo sobe até os céus, ele passa a refletir os raios do sol, ao suceder em um teste de IQ, você poderá guiar o raio de luz até um alvo dando 2d6 de dano, após este primeiro turno, você poderá usar o resto como ação bônus',
    },
            {
      name: '裏夏 ~ Elixir de Hourai',
      type: 'Sazonal',
      cost: 3,
      damage: 0,
      time: '1 turno',
      duration: '1 reação',
      description: 'As chamas em suas costas consomem seu corpo, você se manifesta como uma série de labaredas pulsantes, estas labaredas são imóveis e possuem 1 de vida, quando algum ataque as acertar, elas desaparecerão e você renascerá tomando apenas 1 de dano. Durante as estações quentes, você escolherá onde renascerá, durante as estações fria, este lugar será aleatório',
    },
     {
      name: '裏夏 ~ Vulcão Fujiwara',
      type: 'Sazonal',
      cost: '2 por turno',
      damage: '1d6',
      time: '1 turno',
      duration: 'depende',
      description: 'Você se tornará uma bola de fogo, seus ataques estarão cheios de vigor e terão 1d6 de dano adicional. Você poderá linkar todos estes ataques e gasta-los em um unico turno formando um combo. Durante as estações quentes, você poderá fazer isso com o incremente de dano. Durante as estações frias, não ',
    },
  ],
   
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.expertise.map((expertise, index) => {
   addExpertiseToTable(expertise, index)
})

data.expertise2.map((expertise2, index) => {
   addExpertise2ToTable(expertise2, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#birthplace').val(data.birthplace)
$('#points').val(data.points)
$('#energy').val(data.energy)
$('#season').val(data.season)
$('#focus').val(data.focus)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.sanityBar').css('width', `${calculateBar(data.sanity.current, data.sanity.max)}%`)
$('#sanityCount').text(`${data.sanity.current}/${data.sanity.max}`)
$('#sanityCurrent').val(data.sanity.current)
$('#sanityMax').val(data.sanity.max)

$('.staminaBar').css('width', `${calculateBar(data.stamina.current, data.stamina.max)}%`)
$('#staminaCount').text(`${data.stamina.current}/${data.stamina.max}`)
$('#staminaCurrent').val(data.stamina.current)
$('#staminaMax').val(data.stamina.max)

$('.manaBar').css('width', `${calculateBar(data.mana.current, data.mana.max)}%`)
$('#manaCount').text(`${data.mana.current}/${data.mana.max}`)
$('#manaCurrent').val(data.mana.current)
$('#manaMax').val(data.mana.max)

const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const sanityModal = $('#sanityModal')
const staminaModal = $('#staminaModal')
const manaModal = $('#manaModal')

const input = document.querySelector("input");
input.addEventListener("input", function(event) {
  console.log(event.target.value);
});

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'sanityModal') {
    sanityModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  } else if (event.target.id == 'addExpertiseModal') {
     closeModal('#addExpertiseModal')
  } else if (event.target.id == 'addExpertise2Modal') {
     closeModal('#addExpertise2Modal')
  }

})

function rollAtribute(atribute, amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('3d6')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.sanityBar').click(function () {
  console.log(this)
  sanityModal.css('display', 'block')
})

$('.staminaBar').click(function () {
  console.log(this)
  staminaModal.css('display', 'block')
})

$('.manaBar').click(function () {
  console.log(this)
  manaModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})

$('#addExpertise').click(function() {
   openModal('#addExpertiseModal')
})

$('#addExpertise2').click(function() {
   openModal('#addExpertise2Modal')
})

$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#possession').change(function () {
  if (this.checked) {
    console.log('Modo possessão ativado!')
  } else {
    console.log('Modo possessão desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#traumatized').change(function () {
  if (this.checked) {
    console.log('Modo traumatizado ativado!')
  } else {
    console.log('Modo traumatizado desativado!')
  }
})

$('#crazed').change(function () {
  if (this.checked) {
    console.log('Modo enlouquecido ativado!')
  } else {
    console.log('Modo enlouquecido desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'fire') {
    weaponType = 'Fogo'
  } else if ($('#weaponType').val() == 'arch') {
    weaponType = 'Arco'
  } else if ($('#weaponType').val() == 'fight') {
    weaponType = 'Briga'
  }

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weapondamage').val(),
    attack: $('#weaponAttack').val(),
  }

  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})

$('#addExpertiseForm').submit(function (event) {
  var expertiseCost = ''

  if ($('#expertiseCost').val() == 1) {
    expertiseCost = 1
  } else if ($('#expertiseCost').val() == 2) {
    expertiseCost = 2
  } else if ($('#expertiseCost').val() == 3) {
    expertiseCost = 3
  }

  const expertise = {
    name: $('#expertiseName').val(),
    cost: $('#expertiseCost').val(),
    description: $('#expertiseDescription').val(),
  }

  data.expertise.push(expertise)
  const id = data.expertise.length - 1
  addExpertiseToTable(expertise, id)

  closeModal('#addExpertiseModal')
  event.preventDefault()
})


$('#addExpertise2Form').submit(function (event) {
  var expertise2Type = ''

  if ($('#expertise2Type').val() == 'seasonal') {
    expertise2Type = 'Sazonal'
  } else if ($('#expertise2Type').val() == 'esoterica') {
    expertise2Type = 'Esoterica'
  } else if ($('#expertise2Type').val() == 'youjutsu') {
    expertise2Type = 'Youjutsu'
  }

  const expertise2 = {
    name: $('#expertise2Name').val(),
    type: $('#expertise2Type').val(),
    cost: $('#expertise2Cost').val(),
    damage: $('#expertise2Damage').val(),
    time: $('#expertise2Time').val(),
    duration: $('#expertise2Duration').val(),
    description: $('#expertise2Description').val(),
    
  }

  data.expertise2.push(expertise2)
  const id = data.expertise2.length - 1
  addExpertise2ToTable(expertise2, id)

  closeModal('#addExpertise2Modal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeSanity').submit(function (event) {
  let current = Number($('#sanityCurrent').val())
  const max = Number($('#sanityMax').val())

  if (current > max) {
    alert('A sanidade atual não pode ser maior que a maxima!')
    current = max
  }

  data.sanity.current = current
  data.sanity.max = max
  $('.sanityBar').css('width', `${calculateBar(current, max)}%`)
  $('#sanityCount').text(`${current}/${max}`)

  closeModal('#sanityModal')
  event.preventDefault()
})

  $('#changeStamina').submit(function (event) {
  let current = Number($('#staminaCurrent').val())
  const max = Number($('#staminaMax').val())

  if (current > max) {
    alert('A stamina atual não pode ser maior que a maxima!')
    current = max
  }

  data.stamina.current = current
  data.stamina.max = max
  $('.staminaBar').css('width', `${calculateBar(current, max)}%`)
  $('#staminaCount').text(`${current}/${max}`)

  closeModal('#staminaModal')
  event.preventDefault()
})

$('#changeMana').submit(function (event) {
  let current = Number($('#manaCurrent').val())
  const max = Number($('#manaMax').val())

  if (current > max) {
    alert('A mana atual não pode ser maior que a maxima!')
    current = max
  }

  data.mana.current = current
  data.mana.max = max
  $('.manaBar').css('width', `${calculateBar(current, max)}%`)
  $('#manaCount').text(`${current}/${max}`)

  closeModal('#manaModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {

  const table = [
    { normal: 18 },
    { normal: 17, good: 18 },
    { normal: 16, good: 18 },
    { normal: 15, good: 17 },
    { normal: 14, good: 17, extreme: 18 },
    { normal: 13, good: 16, extreme: 18 },
    { normal: 12, good: 16, extreme: 36 },
    { normal: 11, good: 15, extreme: 34 },
    { normal: 10, good: 15, extreme: 34 },
    { normal: 9, good: 14, extreme: 34 },
    { normal: 9, good: 14, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 8, good: 13, extreme: 32 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 7, good: 12, extreme: 30 },
    { normal: 6, good: 11, extreme: 30 },
    { normal: 6, good: 11, extreme: 28 },
    { normal: 5, good: 10, extreme: 28 },
    { normal: 5, good: 10, extreme: 26 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Falha Crítica'
    if (dice >= type.good) return 'Falha Normal'
    return 'Sucesso Normal'
  } else if (type.good) {
    if (dice >= type.good) return 'Falha'
    return 'Sucesso Normal'
  } 
  return 'Sucesso Crítico'
}

function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
        <td>
            <button onclick="deleteWeapon(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td>${weapon.damage}</td>
        <td>${weapon.attack}</td>
    </tr>`)
  $('table#weapons').append(newWeapon)
}

function addExpertiseToTable(expertise, id) {
  const newexpertise = $(`<tr id="expertise_${id}">
        <td>
            <button onclick="deleteExpertise(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise.name}
        </td>
        <td>${expertise.cost}</td>
        <td>${expertise.description}</td>
    </tr>`)
  $('table#expertise').append(newexpertise)
}

function addExpertise2ToTable(expertise2, id) {
  const newexpertise2 = $(`<tr id="expertise2_${id}">
        <td>
            <button onclick="deleteExpertise2(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${expertise2.name}
        </td>
        <td>${expertise2.type}</td>
        <td>${expertise2.cost}</td>
        <td>${expertise2.damage}</td>
        <td>${expertise2.time}</td>
        <td>${expertise2.duration}</td>
        <td>
            <button onclick="showExpertise2Description(${id})">
                <i class="fa fa-info-circle"></i>
            </button>
        </td>
    </tr>`)
  $('table#expertise2').append(newexpertise2)
}

function showExpertise2Description(id) {
  const expertise2 = data.expertise2[id]
  $('#expertise2DescriptionTitle').text(expertise2.name)
  $('#expertise2DescriptionText').text(expertise2.description)
  $('#expertise2DescriptionModal').modal('show')
}


function addAttribute(attribute, id) {
  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}" disabled>
  </div>`)
  $('#attributesList').append(newAttribute)
}

function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}

function deleteExpertise(id) {
  $(`tr#${id}`).remove()
}

function deleteExpertise2(id) {
  $(`tr#${id}`).remove()
}


/// Árvore de Foco

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
});

 function convertNumber() {
      // Get the input value
      var input = document.getElementById("input").value;
      // Perform the conversion
      var output = input / 3;
      // Display the results
      document.getElementById("outputDisplay").innerHTML = "Output: " + output;
    }


function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  document.getElementById("mySidebar").style.width = "500px";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}

   const areas = document.querySelectorAll("area");
  const sidebar = document.getElementById("mySidebar");

  for (let area of areas) {
    area.addEventListener("click", function() {
      toggleNav();
      updateSidebarContent(area.title);
    });
  }

  function toggleNav() {
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  }

  function updateSidebarContent(title) {
    let content;
    switch (title) {
      case "A Lenda do descendente de Mara, O corruptor":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> A poeira abaixava no campo de batalha, a luta havia terminado e o alvo de vocês havia finalmente caído. Você olha para o lado e percebe seus companheiros de viagem derrubando suas armas no chão, limpando o suor de suas testas e o sangue de suas lâminas, a adrenalina ainda corre em suas veias, seus batimentos cardiacos estão aceleradíssimos. Quando você olha para seus braços, você vê as monstruosidades coladas ao seu corpo, o sangue sendo bombeado pelas veias saltadas, os musculos deformados se flexionando e contorcendo, a estrutura inteira do seu corpo se retorcendo para acomodar as mutações <br><br> Você se tornou um monstro, uma aberração, seu unico propósito agora é ser sacrificado para que o mundo possa ser reiniciado e a humanidade possa ser salva";
        break;
      case "A Verdadeira face do deus secreto":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> No antigo Mausoléu Umebachi-Goryo, na vila destruída de Taishi, vocês fizeram uma descoberta incrivel, vocês libertaram uma nova força ao mundo, o Deus Secreto, absoluto em seu poder e supremo em sua sagacidade estará cada vez mais próximo de vocês, sintam seu poder correndo por tuas veias e vejam a natureza respirar e a energia se movimentar";
        break;
      case "O Guerreiro que luta sob o sol eterno do verão":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br>  O Verão é uma das estações mais energéticas, a vida parece brotar com mais força, as chamas que queimam em suas costas interagem diretamente com este ambiente vivo e dinâmico, se alimentando dos raios do sol, a energia liberada pelas árvores, o fogo dentro do coração dos homens e dos animais, este vigor lhe dá vida. <br> Ao comprar este foco, você ganha 5 pontos sazonais";
        break;
      case "Verão dos deuses da terra":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> Você pode focar seus poderes no aspecto mais destrutivo possível, a radiação solar é extremamente mortal e a própria figura de um Deus Solar é vista com honra e aclamação <br> Ao comprar este foco, você pode adicionar uma componente sazonal aos ataques do Nyuudo, os ataques do Nyuudo serão preenchidos com fogo e ele não receberá dano pelos próprios ataques";
        break;
      case "Verão dos deuses celestiais":
        content = "Gasto: 2 PF <br> Requisito: Nenhum <br> Você pode focar seus poderes no aspecto mais sagrado possível, a luz do sol é uma eterna fonte não apenas de iluminação física como iluminação espiritual, não é a toa que o símbolo do Nirvana é o sol. <br> Ao comprar este foco, você pode adicionar o poder da sua estação em sua arma, ela não queimará com as chamas e terá um acréscimo de dano igual a uma habilidade sazonal sua ";
        break;
      case "Prisma solar":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com Terra Desolada <br> Suas habilidades se tornam mais fortes, você aprende a canalizar melhor a luz do sol não apenas para você como para outros. <br> Ao comprar este foco,  você adquire a habilidade Prisma Solar, você consegue refletir os raios do sol e isolar seu poder. Você pode adicionar uma componente de fogo para todos os seus ataques e os ataques de seus companheiros, exceto aquelas que obviamente iriam ser anuladas";
        break;
      case "Terra Desolada":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com Prisma Solar <br> Suas habilidades se tornam mais poderosas, as chamas em suas costas crescem, as labaredas podem atingir até 1m de altura. <br> Ao comprar este foco, você adquire a habilidade terra desolada, você se torna resistente a dano de fogo e pode recuperar mana ao se rodear em chamas";
        break;
      case "Hyakki Yagyo":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> Pouco antes de vocês se encontrarem, um livro chamado Shūgaishō, cujo autor é desconhecido, continha instruções sobre como sobreviver ao Hyakki Yagyo, caso ele viesse a ocorrer. A instrução é não sair de casa em hipotése alguma e aqueles que ouvirem o desfile, devem conjurar estas palavras <br><br> KA-TA-SHI-HA-YA, E-KA-SE-NI-KU-RI-NI, TA-ME-RU-SA-KE, TE-E-HI, A-SHI-E-HI, WA-RE-SHI-KO-NI-KE-RI. Talvez seja tarde demais para isso";
        break;
      case "Maldição Celestial":
        content = "Gasto: 2 PF (Coletivo) <br> Requisito: Nenhum <br> Não é possível que tudo tenha sido uma coincidência, o roubo da Shichiseiken e o ataque em Naniwa devem estar relacionados de alguma forma, tudo foi planejado, a vinda do imperador, o fluxo de Youkais nunca vistos antes no dia do festival de Tsukimi, o festival da Lua. Alguma coisa está prestes a acontecer e vocês são os catalisadores para o cataclisma";
        break;
      case "Nictofobia":
        content = "Gasto: 3 PF <br> Requisito: Descobrir quem pegou a espada de Sete Estrelas <br><br><br> A morte não é uma escapatória";
        break;
      case "Virtude Budista":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> As virtudes de um guerreiro se confundem muito com as próprias virtudes Budistas, não é a toa que a vinda do Shogunato ao Japão é uma das principais razões para o avanço do Budismo na escala em que ele foi visto. Você pode se inspirar nos Deuses, Bodhisattvas e guerreiros antigos para se tornar um guerreiro mais poderoso";
        break;
      case "O Caminho dos nove sofrimentos":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> Duhkha, traduzido como sofrimento, dor ou infelicidade é um conceito chave para o Budismo. a maior parte das escolas tipicamente associam 9 sofrimentos que devem ser superados no caminho para o Nirvana: Sofrimento do nascimento, da velhice, da doença, da morte, de estar separado de entes queridos, de estar junto de entes odiados, não ter tudo que quer, de depender de coisas materiais e talvez o mais importante de todos, o sofrimento causado pelo renascimento. O caminho de todo Budista é repleto de tribulações e desafios que devem ser superados, o aspirante ao Nirvana, de qualquer forma ou tipo, deve superar estes desafios ";
        break;
      case "Prakrti":
        content = "Gasto: 3 PF <br> Requisito: Retorne ao Budismo <br> Após tanto tempo estando longe da fé Budista, você se vê novamente enfrentando os mesmos demônios que enfrentava antes, as ameaças e os perigos anunciados nos antigos pergaminhos estão se confirmando, você se sente mais confortável em retornar para a fé e talvez retornar ao caminho para o Nirvana";
        break;
      case "Caminho ensanguentado do nirvana":
        content = "Gasto: 2 PF <br> Requisito: Encontrar uma cópia do Ōjōyōshū <br> Este foco é mutualmente exclusivo com Caminho violeta do Nirvana <br> Você decidiu que seu retorno será segundo seus próprios termos, você não será aprisionado ou restringido por qualquer escola ou doutrina, você construirá seu próprio caminho para o Nirvana, mesmo que tenha que passar por cima de muitos cadaveres para isso ";
        break;
      case "Caminho violeta do nirvana":
        content = "Gasto: 2 PF <br> Requisito: Encontrar uma cópia de Shigisan Engi <br> Este foco é mutualmente exclusivo com Caminho ensanguentado do Nirvana <br> Você decidiu retornar ao Budismo, o aspecto mais importante para a ascensão ao Nirvana é a orientação Espiritual, você precisa obter controle não apenas sobre sua mente mas também seu espírito, seu caminho para o Nirvana será cheio de tribulações, mas as recompensas serão maiores aindas";
        break;
      case "Hana wa Sakuragi, hito wa bushi":
        content = "Gasto: Livre <br> Requisito: Nenhum <br> As cerejeiras são para as flores o que os guerreiros são para os homens, um hino para a classe mais poderosa de cidadãos Japoneses. Mesmo o grande imperador do Japão ficaria completamente indefeso sem sua guarda particular, isso foi visto quando durante a Guerra Genpei, o imperador foi deposto do poder e se tornou um cargo exclusivamente simbólico e o Shogunato Kamakura foi estabelecido, assim encerrando o período Heiano, a epoca de ouro do Japão Medieval ";
        break;
      case "O Emissário do Dragão Rei":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Você ainda não sabe de onde que o seu nyuudo tirou a inspiração para assumir uma forma de Dragão quando vocês se conheceram, você assume que teria sido apenas uma escolha estética, mas algo dentro de você pensa que talvez seja mais que só isso. Os Dragões no Japão não são simplesmente Deuses comuns como aqueles do Yaoyorozu-no-Kami, eles são governadores do Céu, alguns especulam que o Dragão Rei pode ser mais poderoso que Amaterasu, a Deusa Suprema e mais poderosa do Shinto ";
        break;
      case "Caminho da deusa Benzaiten":
        content = "Gasto: 3 PF <br> Requisito: Visitar o templo de Benzaiten <br> Benzaiten é uma Deusa Budista que foi sincretizada no Shintoismo, ela é a Deusa da água, música, arte, amor, sabedoria e fortuna, essa grande quantidade de atribuições indica sua natureza multifacetada, mas algo que você ouve poucos falarem é sobre sua relação com o Rei Dragão. Benzaiten é a terceira filha do Rei Dragão e em muitas fontes diferentes, ela mora com o dragão em seu palácio    ";
        break;
      case "kusanagi no tsurugi":
        content = "Gasto: 2 PF <br> Requisito: Receber orientação de Benzaiten <br> A espada Kusanagi no Tsurugi, um dos tesouros do Japão, foi utilizado pelo Deus das tempestades, Susanoo para matar o dragão de oito cabeças, Yamata no Orochi. Você acredita saber a localização desta espada após a Deusa Benzaiten lhe contar, você só precisa ir pegar";
        break;
      case "O Guerreiro de Mil Braços":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> O Reino de Asura é tipicamente visto dentro da cosmologia Budista como um meio termo entre os caminhos bons e ruins do Samsara, ele não inteiramente ruim como os Reinos do Inferno, Animal e Fantasma, mas também não é bom como o Reino dos Devas. Os habitantes deste reino são tipicamente Deuses e Semi-Deuses que foram expulsos do Reino dos Devas, seu poder é absurdamente grande e aqueles que reincarnam neste reino são envolvidos em um estado constante e interminável de destruição, luta e conflito. Os Asuras são seres arrogantes, violentos e egoístas, por isso que o reino dos Asuras também é chamado de reino dos desejos. Ao comprar este foco, você manifesta os poderes de um Asura, sua habilidade de sangue de Asura será melhorada, o dano de cada soco aumentará para 2d6 e você sempre atacará no mesmo turno";
        break;
      case "Guerra na terra e no céu":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Nesta guerra, você possui uma vantagem que outros não poderiam imaginar, você é capaz de travar uma guerra na terra e nos céus. Derrube os do ar com o Nyuudo e finalize o serviço na terra, a parceria entre os dois será crucial para garantir que os dois sobrevivam. <br> Ao comprar este foco, você colocará uma enfase maior na cooperação entre você e seu Nyuudo, vocês poderão organizar ataques em conjunto sempre que estiverem em iniciativas diferentes, lembrando que você precisará ter liberado a cabeça do Nyuudo para colocar ele na iniciativa";
        break;
      case "Naginata-jutsu 2":
        content = "Gasto: 2 PF <br> Requisito: Treinar com uma Naginata <br> Este foco é mutualmente exclusivo com Hecatoncheir Draconico <br> Você já passou por todo tipo de batalha imaginável, vocÊ se tornou um guerreiro muito experiente não apenas com o bastão, mas também com outras armas longas, agora, você só precisa selar o trato e aprimorar seu estilo de combate <br> Ao comprar este foco, seu estilo de combate será substituido por Naginatajutsu 2, um estilo de combate mais forte e que incluirá novas vantagens para bastões e naginatas ";
        break; 
      case "Meditação Profunda":
        content = "Gasto: 3 PF <br> Requisito: Destruir o bracelete <br> Você se tornou um guerreiro eximio, um caçador de Youkais e ao longo de seu caminho sangrento, você deixou um rastro de destruição impressionante entretanto, existe um alvo que você parece não ter dado muita atenção, a alma do Nyuudo é extremamente poderosa, o conhecimento e a força do Nyuudo seriam suficientes para você eliminar qualquer alvo que estiver a sua frente, você só precisa achar um jeito de absorver-la <br> Ao comprar este foco, você perderá seu Nyuudo, mas em troca, irá absorver seus poderes para si, você se tornará mais forte, ágil e inteligente";
        break;
      case "Sinergia Maior":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Vocês já passaram um bom tempo juntos e conseguem se entender muitas vezes sem precisarem trocar uma palavra, sua conexão psiquica com o Nyuudo se torna mais forte, você poderá se comunicar com ele de uma distância muito maior. <br> Ao comprar este foco, ele poderá utilizar todas as suas habilidades, exceto sazonais, ele fará com um modificador de -2";
        break; 
      case "Hecantoncheir Draconico":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Este foco é mutualmente exclusivo com Naginatajutsu 2 <br> Para tornar seu Nyuudo mais poderoso, você precisará atingir o limite do que este bracelete é capaz, você entende que ele possui suas limitações então é importante que você comece a procurar alternativas para ele, se você quiser que o Nyuudo se torne cada vez mais forte <br> Ao comprar este foco, você terá um leque maior de habilidades para o seu Nyuudo. você poderá criar até 4 braços ou 2 cabeças para ele, lembrando que cada cabeça é capaz de controlar apenas 2 braços ";
        break;
      case "Purificação Youkai":
        content = "Gasto: 3 PF <br> Requisito: Destruir o bracelete <br> Este foco é mutualmente exclusivo com Possessão Draconica <br> Até então, você já terá percebido que o grande limitador do poder do seu Nyuudo é o bracelete, este dispositivo mágico pode ter permitido que vocês se comuniquem e lutem juntos no inicio, mas agora você percebe que sua utilidade está chegando ao fim, livre-se dele, liberte o Nyuudo ao mundo permanentemente para que ele reine os céus e devaste tudo pelo seu caminho";
        break; 
      case "Possessão Draconica":
        content = "Gasto: 2 PF <br> Requisito: Melhorar seu bracelete <br> Este foco é mutualmente exclusivo com Purificação Youkai e Meditação Profunda <br> Até então, você conseguiu perceber que o bracelete que te une ao seu Nyuudo tem diversas limitações, muitas delas que já te deixaram na mão inumeras vezes, você acredita que deva existir uma versão aprimorada dele, uma versão que possa libertar o potencial da sua relação com a criatura <br> Ao comprar este foco, você irá melhorar seu bracelete e obter um novo arsenal de melhorias para seu Nyuudo ";
        break;
      case "Transformação Menor":
        content = "Gasto: 4 PF <br> Requisito: Nenhum <br> Sua conexão com o Nyuudo se tornou muito forte desde que vocês se conheceram, não é nenhum exagero dizer que ele é uma extensão de seu próprio corpo, talvez isto até lhe faça questionar se você ainda é humano, de qualquer forma, você escolhe tornar esta conexão mais forte ainda <br> Ao comprar este foco, você adquire certas características dracônicas e adiciona elas de forma permanente ao seu corpo, você se torna mais leve que o ar, podendo voar usando o vento e adquire um pouco da aparência e dos atributos do seu Nyuudo";
        break; 
      case "Saude de Maitreya":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Maitreya é o atual renovador do Budismo, quando os ensinamentos de Gautama Buddha tiverem sido esquecidos neste mundo. <br> Ao comprar este foco, você irá obter a iluminação de Maitreya, suceda em um teste de HT e você poderá se curar utilizando sua stamina ";
        break;
      case "Inteligencia de Mansjuri":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Mansjuri é um bodhisattva associado com o conceito de Prajna, ou sabedoria de acordo com o Budismo. Ele tipicamente aparece segurando uma espada flamejante em cima de um leão azul. <br> Ao comprar este foco, você poderá manifestar a sabedoria de Mansjuri, suceda em um teste de IQ e recite o mantra oṃ arapacana dhīḥ, você se sentirá inspirado, você pode escolher como aplicar essa inspiração, você pode dar uma vantagem de 1d6 para alguém ou usar em si mesmo";
        break; 
      case "Força de Vajrapani":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Vajrapani é um dos primeiros bodhisattvas a aparecer e o guardião de Gautama Buddha, ele tipicamente aparece usando uma coroa de caveiras, seu pescoço é decorado com um colar de cobras, seu cinto é feito de pelo de tigre e ele segura uma Vajra. <br> Ao comprar este foco, você manifestará o poder de Vajrapani, durante 1d6 turnos, ou aproximadamente 1 min, você sucederá em qualquer teste de força automaticamente, você precisará fazer um teste de fatiga após usar esta habilidade ";
        break;
      case "Dextreza de Avalokistevara":
        content = "Gasto: 3 PF <br> Requisito: Nenhum <br> Avalokitesvara é um dos principais bodhisattvas, ele incorpora toda a compaixão dos Buddhas ao mundo e é o principal assistentes de Amitabha Buddha, o sucessor de Gautama Buddha. Uma história conta que ele teria feito um voto para nunca descansar enquanto todas as criaturas fossem libertas do Samsara. Apesar de seu esforço divino, ele percebeu que era uma tarefa quase impossivel, depois de tentar ouvir os prantos e compreender as necessidades das almas presas no inferno, sua cabeça se partiu em onze partes e todas as vezes que ele tentava alcançar as almas, seus braços se quebravam. Amitabha viu seu desespero e lhe deu mil braços para alcançar as multidões. Incorpore os espírito de Avalokitesvara, com seu poder, você terá que escolher entre condenar ou salvar as almas ao samsara <br> Ao comprar este foco, você poderá refazer todo teste de Dextreza que falhar por até 2";
        break; 
      default:
        content = "This is some default content for an undefined section.";
    }
    sidebar.innerHTML = `
      <a href="#" class="closebtn" onclick="toggleNav()">&times;</a>
      <br></br>
      <br></br>
      <h3>${title}</h3>
      <p>${content}</p>
    `;
  }
