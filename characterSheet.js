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
  document.getElementById("mySidebar").style.width = "250px";
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
      case "A Lenda da Guerreira que Celebra a Maidono":
        content = "";
        break;
      case "A Verdadeira Face do Deus Secreto":
        content = "This is some custom content for the 'A Verdadeira Face do Deus Secreto' section.";
        break;
      case "Fé Nativa em meio a terra morta":
        content = "This is some custom content for the 'Fé Nativa em meio a terra morta' section.";
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
