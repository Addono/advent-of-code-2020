import { allowedNodeEnvironmentFlags } from 'process'
import { sum, loadDataAsStringArray, multiply, loadData } from '../util'

const data: string = loadData('data/day04.txt').toString()

const passports: {[k: string]: string}[] =
  data
    .split("\n\n") // Get all individual passports
    .map(passportString => (
      passportString
        .split(/\s/) // Split key-value pairs by whitespace
        .map(keyValue => keyValue.split(":")) // Split the key and value into an array
        .map(([key, value]) => ({ [key]: value })) // Create each key-value pair into an object {key: value}
        .reduce((o1, o2) => ({ ...o1, ...o2 }), {}) // Combine all objects into one big object
    ))


const keyValidation = Object.freeze({
  'byr': (v: string) => v.length === 4 && 1920 <= parseFloat(v) && parseFloat(v) <= 2002,
  'iyr': (v: string) => v.length === 4 && 2010 <= parseFloat(v) && parseFloat(v) <= 2020,
  'eyr': (v: string) => v.length === 4 && 2020 <= parseFloat(v) && parseFloat(v) <= 2030,
  'hgt': (v: string) => v.endsWith("cm") ? v.length === 5 && 150 <= parseFloat(v.substr(0, 3)) && parseFloat(v.substr(0, 3)) <= 193 : v.length === 4 && 59 <= parseFloat(v.substr(0, 2)) && parseFloat(v.substr(0, 2)) <= 76,
  'hcl': (v: string) => v.match(/\#[0-9a-f]{6}/) !== null,
  'ecl': (v: string) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(v),
  'pid': (v: string) => v.length === 9 && parseFloat(v) !== NaN,
})

const passportsWithValidFields = passports.filter(passport => (
  Object.keys(keyValidation)
    .map(key => key in passport)
    .reduce((v1, v2) => v1 && v2)
))

console.log("Day 4", "Part 1", passportsWithValidFields.length)

const validPassports = passportsWithValidFields.filter((passport) => (
  Object.entries(keyValidation)
    .map(([key, validator]) => validator(passport[key]))
    .reduce((v1, v2) => v1 && v2)
))

console.log("Day 4", "Part 2", validPassports.length)
