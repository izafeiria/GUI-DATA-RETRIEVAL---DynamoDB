package com.example.profile.repository;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.*;
import com.amazonaws.services.dynamodbv2.model.*;
import com.example.profile.entity.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ProfileRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public List<Profile> findAll() {
        return dynamoDBMapper.scan(Profile.class, new DynamoDBScanExpression());
    }

    public PaginatedScanList<Profile> findHome(String attr, String val) {
        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
        if (attr.equals("numOccupants") || attr.equals("numBedrooms")) {
            scanExpression.addFilterCondition(attr, new Condition()
                    .withComparisonOperator(ComparisonOperator.EQ)
                    .withAttributeValueList(new AttributeValue().withN(val)));


        } else {
            scanExpression.addFilterCondition(attr, new Condition()
                    .withComparisonOperator(ComparisonOperator.EQ)
                    .withAttributeValueList(new AttributeValue().withS(val)));
        }

        return dynamoDBMapper.scan(Profile.class, scanExpression);
    }

    public PaginatedScanList<Profile> findAppExist(String attr, Boolean exist,String app2, Boolean exist2) {
        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
        if (exist.equals(true)) {
            scanExpression.addFilterCondition(attr, new Condition()
                    .withComparisonOperator(ComparisonOperator.NOT_NULL));
        } else {
            scanExpression.addFilterCondition(attr, new Condition()
                    .withComparisonOperator(ComparisonOperator.NULL));
        }

         if(app2.equals("")){
            return dynamoDBMapper.scan(Profile.class, scanExpression);
        }
        else if (exist2.equals(true) ) {
            scanExpression.addFilterCondition(app2, new Condition()
                    .withComparisonOperator(ComparisonOperator.NOT_NULL));
            return dynamoDBMapper.scan(Profile.class, scanExpression);
        }

        else {
            scanExpression.addFilterCondition(app2, new Condition()
                    .withComparisonOperator(ComparisonOperator.NULL));
            return dynamoDBMapper.scan(Profile.class, scanExpression);
        }

    }

    public PaginatedScanList<Profile> findAppliance(String attr, String val, String cond) {
        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
        switch (cond) {
            case "L":
                scanExpression.addFilterCondition(attr, new Condition()
                        .withComparisonOperator(ComparisonOperator.LT)
                        .withAttributeValueList(new AttributeValue().withN(val)));
                break;
            case "G":
                scanExpression.addFilterCondition(attr, new Condition()
                        .withComparisonOperator(ComparisonOperator.GT)
                        .withAttributeValueList(new AttributeValue().withN(val)));
                break;
            case "E":
                scanExpression.addFilterCondition(attr, new Condition()
                        .withComparisonOperator(ComparisonOperator.EQ)
                        .withAttributeValueList(new AttributeValue().withN(val)));
                break;
        }

            return dynamoDBMapper.scan(Profile.class, scanExpression);
        }
// ############################### HOME & APPLIANCE #################################################

    public PaginatedScanList<Profile> findHomeApp(String attr, String val, String app, Boolean exist) {
        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();

        if (attr.equals("numOccupants") || attr.equals("numBedrooms")) {

            scanExpression.addFilterCondition(attr, new Condition()
                    .withComparisonOperator(ComparisonOperator.EQ)
                    .withAttributeValueList(new AttributeValue().withN(val)));

        } else {
            scanExpression.addFilterCondition(attr, new Condition()
                    .withComparisonOperator(ComparisonOperator.EQ)
                    .withAttributeValueList(new AttributeValue().withS(val)));
        }
        if (exist.equals(true)) {
            scanExpression.addFilterCondition(app, new Condition()
                    .withComparisonOperator(ComparisonOperator.NOT_NULL));
            //scanExpression.getProjectionExpression();
        } else {
            scanExpression.addFilterCondition(app, new Condition()
                    .withComparisonOperator(ComparisonOperator.NULL));
        }

        return dynamoDBMapper.scan(Profile.class, scanExpression);
    }

    public PaginatedScanList<Profile> findHomeAppCond(String attr, String val1, String app, String val2, String cond) {
        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
        if (attr.equals("numOccupants") || attr.equals("numBedrooms")) {
            scanExpression.addFilterCondition(attr, new Condition()
                    .withComparisonOperator(ComparisonOperator.EQ)
                    .withAttributeValueList(new AttributeValue().withN(val1)));

        } else {
            scanExpression.addFilterCondition(attr, new Condition()
                    .withComparisonOperator(ComparisonOperator.EQ)
                    .withAttributeValueList(new AttributeValue().withS(val1)));
        }
        switch (cond) {
            case "L":
                scanExpression.addFilterCondition(app, new Condition()
                        .withComparisonOperator(ComparisonOperator.LT)
                        .withAttributeValueList(new AttributeValue().withN(val2)));
                break;
            case "G":
                scanExpression.addFilterCondition(app, new Condition()
                        .withComparisonOperator(ComparisonOperator.GT)
                        .withAttributeValueList(new AttributeValue().withN(val2)));
                break;
            case "E":
                scanExpression.addFilterCondition(app, new Condition()
                        .withComparisonOperator(ComparisonOperator.EQ)
                        .withAttributeValueList(new AttributeValue().withN(val2)));
                break;
        }
        return dynamoDBMapper.scan(Profile.class, scanExpression);

    }

    public PaginatedScanList<Profile> activities(String act) {
        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
        scanExpression.setConditionalOperator(ConditionalOperator.OR);

        Map<String, Condition> scanFilter = new HashMap<String, Condition>();
        switch (act) {
            case "Refrigeration":
                scanFilter.put("refrigerator", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("freezer", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("fridgeCombo", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                break;
            case "Entertainment":
                scanFilter.put("TV", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("dvd", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("tablet", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("computer", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("gameConsole", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("cableBox", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                break;
            case "Laundry":
                scanFilter.put("washingMachine", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("tumbleDrier", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("dishWasher", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                break;
            case "Cooking":
                scanFilter.put("oven", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("hob", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("grill", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("stove", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("toaster", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("kettle", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("microwave", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                break;
            case "waterHeating":
                scanFilter.put("electricShower", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("immersionHeater", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("waterBoiler", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                break;
            case "spaceHeating":
                scanFilter.put("airCondition", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("heatPump", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                break;
            case "electricVehicle":
                scanFilter.put("electricVehicle", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("test", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                break;
            case "poolSauna":
                scanFilter.put("poolPump", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("sauna", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("swimmingPool", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                break;
            case "other":
                scanFilter.put("iron", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                scanFilter.put("test", new Condition().withComparisonOperator(ComparisonOperator.NOT_NULL));
                break;
        }

        scanExpression.setScanFilter(scanFilter);
        return dynamoDBMapper.scan(Profile.class, scanExpression);
    }
}

//    public PaginatedScanList<Profile> findAppExist(String attr, Boolean exist) {
//        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
//        if (exist.equals(true)) {
//            scanExpression.addFilterCondition(attr, new Condition()
//                    .withComparisonOperator(ComparisonOperator.NOT_NULL));
//            //scanExpression.getProjectionExpression();
//        } else {
//            scanExpression.addFilterCondition(attr, new Condition()
//                    .withComparisonOperator(ComparisonOperator.NULL));
//        }
//        return dynamoDBMapper.scan(Profile.class, scanExpression);
//    }
