# 📱 Uso de Ionic Components con Standalone Components en Angular

Este documento explica cómo utilizar los **componentes de Ionic** en una aplicación **Angular moderna** usando **Standalone Components** (Angular 14+). Está basado en la documentación oficial de Ionic: [https://ionicframework.com/docs/components](https://ionicframework.com/docs/components)

---

## ⚙️ Requisitos previos

- Angular 14 o superior
- Ionic Framework (v6 o superior)
- Proyecto configurado con soporte para Standalone Components

---

## 🧩 ¿Qué son los Standalone Components?

Los Standalone Components en Angular permiten construir componentes sin necesidad de incluirlos en un módulo (`NgModule`). Esto reduce la complejidad y mejora la modularidad del código.

---

## 🚀 Cómo usar componentes de Ionic en Standalone Components

### 1. Importar componentes individualmente

Cada componente de Ionic debe importarse desde `@ionic/angular/standalone`.

```ts
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonChip,
  IonDatetime,
  IonCheckbox,
  IonRadioGroup,
  IonRadio,
  IonToast
} from '@ionic/angular/standalone';
