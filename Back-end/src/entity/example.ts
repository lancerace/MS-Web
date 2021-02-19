import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

/*
@Entity({name: "donor"})
export default class Donor {

    @PrimaryGeneratedColumn()
    donor_id: number;

    @Column({ nullable: true})
    name: string;

    @Column()
    email: string;

    @Column({ nullable: true})
    nric: string;


    @Column({ nullable: true })
    mobileNumberId: number;

    @ManyToOne(type => MobileNumbers)
    @JoinColumn({ name: "mobileNumberId" })
    mobile: MobileNumbers

    @CreateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP" })
    updated_at:Date;

    /*@OneToMany(type=>Order, order=>order.donor_id)
    orders:Order[];*/

    /* @OneToOne(type => MobileNumbers)
    @JoinColumn()
    mobile_number: MobileNumbers*/
//}