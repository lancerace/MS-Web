import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity({ name: "accounts" })
export default class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    pin: string;

    @Column()
    pic: string;

    @Column()
    loggedin: number;

    @Column({ type: "timestamp", precision: 0 })
    lastlogin: Date;

    @Column({ type: "timestamp", precision: 0 })
    createdat: Date;

    @Column({ type: "timestamp", precision: 0 })
    birthday: Date;

    @Column()
    banned: number;

    @Column()
    banreason: string;

    @Column()
    macs: string;

    @Column()
    nxCredit: number;

    @Column()
    maplePoint: number;

    @Column()
    nxPrepaid: number;

    @Column()
    characterslots: number;

    @Column()
    gender: number;

    @Column({ type: "timestamp", precision: 0 })
    tempban: Date;

    @Column()
    greason: number;

    @Column()
    tos: number;

    @Column()
    sitelogged: string;

    @Column()
    webadmin: number;

    @Column()
    nick: string;

    @Column()
    mute: number;

    @Column()
    email: string;

    @Column()
    ip: string;

    @Column()
    rewardpoints: number;

    @Column()
    votepoints: number;

    @Column()
    hwid: string;

    @Column()
    language: number;
}


