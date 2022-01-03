#!/usr/bin/env node

import { Command } from 'commander'
import { init } from '../get'
import packageJson from '../../package.json'

const program = new Command()

const { version, name } = packageJson

program
    .name(name)
    .version(version)
    .command('init')
    .action(() => {
        init()
    })

program.parse(process.argv)