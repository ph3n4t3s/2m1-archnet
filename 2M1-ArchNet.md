# 2M - Projet Micro-serre d'intérieure automatisée - Architecture des réseaux informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Harmonia_v4.jpg?raw=true)
![Atelier 1](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Diapositive14.jpeg?raw=true)

## @showdialog

ℹ️ **CONSIGNES IMPORTANTES**
> - 🗂️ **Sauvegardez TOUS vos documents**  dans votre répertoire de travail de groupe sur **OneDrive**.
> - 📝 **Prenez des notes** (sous forme manuscrite ou numérique, peu importe comment, **mais prenez des notes !!!** 😂)
> - 🛤️ **Organisez** et  **planifiez** votre travail de groupe. (Qui ? Fait quoi ? quand ?) 
> - 🧑‍🧑‍🧒 **Communiquez** entre vous.
> - 🧭 **Laissez des traces de **TOUTES vos expérimentations** en prenant des **notes**, des **photos** (avec votre téléphone portable) ou des **captures d'écran**.
> - ⚠️ Mettez à jour le journal de bord tout au long de **CHAQUE séance**.⚠️
> - 🆘 Si vous êtes **perdu** servez-vous des **guides** et des **ressources** qui sont à votre disposition dans le **répertoire du projet** sur **OneDrive**.

## Récolte de données via le port Série (**USB**) @showhint
Le programme envoit les données (sous forme key/value) sur le port série (**USB**) afin de pouvoir les **visualiser** et les **sauvegarder** sur le PC.
> - Si la touche **A** est pressée, le programme envoit la valeur **1**.
> - Si la touche **B** est pressée, le programme envoit la valeur **2**.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    serial.writeValue("touche", 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    serial.writeValue("touche", 2)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
```

### Chargement du code et test
![ChargementCode](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Record4.gif?raw=true)

## Communication Bluetooth émetteur/récepteur @showhint
Le programme sur l'émetteur envoit sur le port Série et via Bluetooth.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    serial.writeValue("touche", 1)
    radio.sendValue("touche", 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    serial.writeValue("touche", 2)
    radio.sendValue("touche", 2)
})
radio.setGroup(10)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
```

## Le récepteur

```blocks
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        basic.showString("A")
    } else if (value == 2) {
        basic.showString("B")
    }
})
radio.setGroup(10)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
```

**ATTENTION** : Fixer le numéro du groupe Bluetooth en accord avec votre numéro de groupe de travail.

## Communication Série et Bluetooth @showhint
![CommunicationPointAPoint](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Dia24.jpeg?raw=true)


## Documenter
> 1. Sauvegardez **TOUTES** les traces de votre expérimentation. (vos **notes**, les **données récoltées** et vos **copies d'écran**)
> 2. Mettez à jour le journal de bord du projet.


