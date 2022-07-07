package com.example.profile.entity;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import lombok.Data;


@Data
@DynamoDBTable(tableName = "profiles_demo")
public class Profile {

    @DynamoDBHashKey(attributeName = "installationId")
    private String installationId;
    // #### HOME ####
    @DynamoDBAttribute(attributeName = "postalCode")
    private String postalCode;
    @DynamoDBAttribute(attributeName = "country")
    private String country;
    @DynamoDBAttribute(attributeName = "propertyType")
    private String propertyType;
    @DynamoDBAttribute(attributeName = "propertyAge")
    private String propertyAge;
    @DynamoDBAttribute(attributeName = "ownership")
    private String ownership;
    @DynamoDBAttribute(attributeName = "occupantType")
    private String occupantType;
    @DynamoDBAttribute(attributeName = "timezone")
    private String timezone;
    @DynamoDBAttribute(attributeName = "numOccupants")
    private Integer numOccupants;
    //propertySize
    @DynamoDBAttribute(attributeName = "numBedrooms")
    private Integer numBedrooms;
    @DynamoDBAttribute(attributeName = "spaceHeatingType")
    private String spaceHeatingType;
    @DynamoDBAttribute(attributeName = "waterHeatingType")
    private String waterHeatingType;
    @DynamoDBAttribute(attributeName = "stoveHeatingType")
    private String stoveHeatingType;
    @DynamoDBAttribute(attributeName = "grillHeatingType")
    private String grillHeatingType;
    @DynamoDBAttribute(attributeName = "ovenHeatingType")
    private String ovenHeatingType;
    @DynamoDBAttribute(attributeName = "photovoltaic")
    private Boolean photovoltaic;
    // #### APPLIANCES ####

    @DynamoDBAttribute(attributeName = "refrigerator")
    private Integer refrigerator;
    @DynamoDBAttribute(attributeName = "freezer")
    private Integer freezer;
    @DynamoDBAttribute(attributeName = "fridgeCombo")
    private Integer fridgeCombo;
    @DynamoDBAttribute(attributeName = "oven")
    private Integer oven;
    @DynamoDBAttribute(attributeName = "grill")
    private Integer grill;
    @DynamoDBAttribute(attributeName = "hob")
    private Integer hob;
    @DynamoDBAttribute(attributeName = "microwave")
    private Integer microwave;
    @DynamoDBAttribute(attributeName = "kettle")
    private Integer kettle;
    @DynamoDBAttribute(attributeName = "toaster")
    private Integer toaster;
    @DynamoDBAttribute(attributeName = "dishWasher")
    private Integer dishWasher;
    @DynamoDBAttribute(attributeName = "washingMachine")
    private Integer washingMachine;
    @DynamoDBAttribute(attributeName = "tumbleDrier")
    private Integer tumbleDrier;
    @DynamoDBAttribute(attributeName = "iron")
    private Integer iron;
    @DynamoDBAttribute(attributeName = "TV")
    private Integer tv;
    @DynamoDBAttribute(attributeName = "dvd")
    private Integer dvd;
    @DynamoDBAttribute(attributeName = "cableBox")
    private Integer cableBox;
    @DynamoDBAttribute(attributeName = "gameConsole")
    private Integer gameConsole;
    @DynamoDBAttribute(attributeName = "computer")
    private Integer computer;
    @DynamoDBAttribute(attributeName = "tablet")
    private Integer tablet;
    @DynamoDBAttribute(attributeName = "electricShower")
    private Integer electricShower;
    @DynamoDBAttribute(attributeName = "electricVehicle")
    private Integer electricVehicle;
    @DynamoDBAttribute(attributeName = "poolPump")
    private Integer poolPump;
    @DynamoDBAttribute(attributeName = "sauna")
    private Integer sauna;

    //only appliances Metadata
    @DynamoDBAttribute(attributeName = "swimmingPool")
    private Integer swimmingPool;
    @DynamoDBAttribute(attributeName = "airCondition")
    private Integer airCondition;
    @DynamoDBAttribute(attributeName = "immersionHeater")
    private Integer immersionHeater;
}
